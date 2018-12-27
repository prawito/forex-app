// library
import React, { Component } from 'react';

// local component
import { Header } from 'molecules';
import { BaseCurrency, TargetCurrency } from 'organisms';


class Home extends Component {
    state = {
        baseCurrency: {
            id: 29,
            name: 'USD',
            detail: 'United States dollar',
            amount: 1
        },
    }

    handleBaseCurrencyChange = (value) => {
        this.setState({
            baseCurrency: value
        })
    }

    render() {
        const {
            state: {
                baseCurrency,
            },
            handleBaseCurrencyChange,
        } = this;

        return (
            <div className="app-wrapper">
                <Header />
                <BaseCurrency onBaseCurrencyChange={(value) => handleBaseCurrencyChange(value)} data={baseCurrency} />
                <TargetCurrency data={baseCurrency} />
            </div>
        )
    }
}

export default Home;