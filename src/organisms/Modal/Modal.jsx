import { Button, Input, RemoveItem } from 'atom';
import cx from 'classnames';
import React, { PureComponent } from 'react';
import country from 'utils/country.json';
import './Modal.scss';

class Modal extends PureComponent {
    state = {
        countryList: country,
        amountValue: 0
    }

    handleSubmit = (value) => {
        this.props.onSubmit(value)
    }

    handleAmountChange = (e) => {
        this.setState({amountValue: e.target.value})
    }

    render() {
        const {
            props: {
                show,
                onClose,
                amount
            },
            state: {
                countryList,
                amountValue
            },
            handleSubmit,
            handleAmountChange
        } = this;

        const classModal = cx('modal-wrapper', {
            'active': show
        })

        const classContent = cx('modal-list-content', {
            'content-active': show
        })

        const countryShow = countryList.map(country => {
            return <li key={country.id} onClick={() => handleSubmit(country)}>{country.name}<br/><small>{country.detail}</small></li>
        })

        let content = null;
        let title = '';
        if(amount){
            content = (
                <div className="change-amount">
                    <Input type="number" placeholder="change amount" onChange={handleAmountChange} />
                    <Button full onClick={() => handleSubmit(amountValue)}>Change Ammount</Button>
                </div>
            )
            title = 'Change Amount';
        }else {
            content =  <ul>{countryShow}</ul>
            title = 'Currency'
        }

        return (
            <div className={classModal}>
                <div className={classContent}>
                    <p className="list-title">{title}</p>
                    <RemoveItem className="close" onClick={onClose} />
                    {content}
                </div>
            </div>
        )
    }
}

export default Modal;