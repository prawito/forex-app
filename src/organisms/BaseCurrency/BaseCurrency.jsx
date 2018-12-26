import React, { PureComponent, Fragment } from 'react';
import { BaseItem } from 'molecules';
import { Modal } from 'organisms';
import './BaseCurrency.scss';

class BaseCurrency extends PureComponent {
    state = {
        showCurrency: false,
        showAmount: false,
        baseCurrency: {}
    }

    handleClick = (value) => {
        switch (value){
            case 'base':
                this.setState({showCurrency: true})
                break;
            case 'amount':
                this.setState({showAmount: true})
                break;
            default:
                this.setState({showCurrency: true})
        }
    }

    handleModalClose = () => {
        this.setState({
            showCurrency: false,
            showAmount: false
        })
    }

    handleSubmitModal = (type, value) => {
        this.handleModalClose()
        let baseCurrency = {...this.state.baseCurrency}

        switch (type){
            case 'base':
                baseCurrency.id = value.id;
                baseCurrency.name = value.name;
                baseCurrency.detail = value.detail;
                break;
            case 'amount':
                baseCurrency.amount = parseInt(value);
                break;
            default:
                baseCurrency = null;
        }

        this.setState({
            baseCurrency: baseCurrency
        }, () => {
            this.props.onBaseCurrencyChange(baseCurrency)
        })
    }

    componentDidMount(){
        this.setState({
            baseCurrency: this.props.data
        })
    }

    render() {
        const {
            props : {
                data
            },
            state: {
                showCurrency,
                showAmount
            },
            handleClick,
            handleModalClose,
            handleSubmitModal
        } = this;

        return (
            <Fragment>
                <Modal show={showCurrency} onClose={handleModalClose} onSubmit={(value) => handleSubmitModal('base', value)} />
                <Modal amount show={showAmount} onClose={handleModalClose} onSubmit={(value) => handleSubmitModal('amount', value)} />
                <div className="base-currency">
                    <BaseItem onClick={() => handleClick('base')} label="Base Currency" value={data.name} valueDesc={data.detail} />
                    <BaseItem onClick={() => handleClick('amount')} label="Amount" value={data.amount} />
                </div>
            </Fragment>
        )
    }
}

export default BaseCurrency;