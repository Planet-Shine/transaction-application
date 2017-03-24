
import React, { Component, PropTypes } from 'react';

class TransactionList extends Component {

    static propTypes = {
        transactions: PropTypes.object,
        banks: PropTypes.object,
        onDelete: PropTypes.func
    };

    render() {
        const { transactions, banks, onDelete } = this.props;
        return (
            <div>
                <ul>
                    {banks.status.loaded &&
                        transactions.list.map(({id, name, amount, bankId}={}) => {
                            return (
                                <li key={id}>
                                    {amount} : {(banks.map[bankId] || {}).name} : {
                                        !~transactions.pendingList.indexOf(id) &&
                                        <span onClick={() => onDelete(id)}>X</span>
                                    }
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default TransactionList;