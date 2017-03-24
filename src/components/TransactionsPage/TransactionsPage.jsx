
import React, { Component } from 'react';
import { TransactionList } from 'containers';

class TransactionsPage extends Component  {

    render() {
        return (
            <div>
                TransactionsPage
                <TransactionList />
            </div>
        );
    }
}

export default TransactionsPage;
