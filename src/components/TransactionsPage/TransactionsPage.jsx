
import React, { Component } from 'react';
import { TransactionList } from 'containers';

class TransactionsPage extends Component  {

    render() {
        return (
            <div>
                <h1>История переводов</h1>
                <TransactionList />
            </div>
        );
    }
}

export default TransactionsPage;
