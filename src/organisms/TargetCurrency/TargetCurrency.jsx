import React, { Component, Fragment } from 'react';
import { TargetItem, TargetEmpty } from 'molecules';
import { AddCurrency } from 'atom';
import { Modal } from 'organisms';
import './TargetCurrency.scss';
import Axios from 'axios';

class TargetCurrency extends Component {
    state = {
        showCurrency: false,
        targetCurrency: [],
        listTargetCurrency: [],
        baseCurrency: {}
    }

    handleModalClose = () => {
        this.setState({ showCurrency: false })
    }

    handleSubmitModal = (value) => {
        let targetCurrency = [...this.state.targetCurrency];
        if (targetCurrency.length > 0) {
            let index = targetCurrency.findIndex(currency => currency.id === value.id)
            if (index === -1) {
                targetCurrency.push(value);
            }
        } else {
            targetCurrency.push(value);
        }
        this.setState({
            showCurrency: false,
            targetCurrency: targetCurrency
        }, () => {
            this.getTargetCurrency();
        });
    }

    addTargetCurrency = () => {
        this.setState({ showCurrency: true })
    }

    getTargetCurrency = () => {
        let targetCurrency = '';
        this.state.targetCurrency.map((currency, index) => {
            if (index + 1 < this.state.targetCurrency.length) {
                targetCurrency = currency.name + ',' + targetCurrency
            } else {
                targetCurrency += currency.name;
            }
            return currency;
        })
        let url = `https://api.exchangeratesapi.io/latest?symbols=${this.state.baseCurrency.name},${targetCurrency}`;
        Axios.get(url).then(res => {
            let listTargetCurrency = [];
            let obj = {};
            this.state.targetCurrency.map((currency) => {
                for (let i in res.data.rates) {
                    let a = res.data.rates[i];
                    if (i === currency.name) {
                        obj = {
                            currency: currency,
                            amount: a,
                            base: this.state.baseCurrency,
                        }
                        listTargetCurrency.push(obj)
                    }
                }
                return currency;
            })
            this.setState({ listTargetCurrency: listTargetCurrency });
        })
    }

    shouldComponentUpdate(nextProps, nextState){
        if( nextProps !== this.props || nextState !== this.state ){
            if(nextProps.data !== this.props.data){
                this.changeBaseCurrency(nextProps);
            }
            return true;
        }
        return false;
    }

    changeBaseCurrency = (props) => {
        this.setState({
            baseCurrency: props.data
        }, () => {
            if(this.state.targetCurrency.length > 0){
                this.getTargetCurrency()
            }
        })
    }

    handleRemove = (val) => {
        let idToRemove = val.currency.id;
        let targetCurrency = [...this.state.targetCurrency];
        let listTargetCurrency = [...this.state.listTargetCurrency];

        let targetIndex = targetCurrency.findIndex(currency => currency.id === idToRemove);
        let listIndex = listTargetCurrency.findIndex(currency => currency.currency.id === idToRemove);

        targetCurrency.splice(targetIndex, 1);
        listTargetCurrency.splice(listIndex, 1);

        this.setState({
            targetCurrency: targetCurrency,
            listTargetCurrency: listTargetCurrency
        })

    }

    componentDidMount() {
        this.changeBaseCurrency(this.props);
    }
 
    render() {
        const {
            state: {
                showCurrency,
                listTargetCurrency
            },
            handleModalClose,
            handleSubmitModal,
            addTargetCurrency,
            handleRemove
        } = this;

        let content = <TargetEmpty onClick={addTargetCurrency} />;

        if (listTargetCurrency.length > 0) {
            content = listTargetCurrency.map(currency => {
                return <TargetItem 
                    key={currency.currency.id} 
                    currency={currency.currency.name} 
                    detail={currency.currency.detail} 
                    amount={currency.amount} 
                    base={currency.base.name} 
                    amountBase={currency.base.amount}
                    onClick={() => handleRemove(currency)} />
            })
        }

        return (
            <Fragment>
                <Modal show={showCurrency} onClose={handleModalClose} onSubmit={(value) => handleSubmitModal(value)} />
                <div className="target-currency-list">
                    {content}
                </div>
                <AddCurrency onClick={addTargetCurrency} />
            </Fragment>
        )
    }
}

export default TargetCurrency;