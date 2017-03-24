
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
                <ul className="list transaction-list">
                    <li className="transaction-list__header" key="header">
                        <div className="transaction-list__item-bank">
                            <span className="cell">
                                Банк
                            </span>
                        </div>
                        <div className="transaction-list__item-amount">
                            <span className="cell">
                                Сумма
                            </span>
                        </div>
                    </li>
                    {banks.status.loaded &&
                        transactions.list.map(({id, name, amount, bankId}={}) => {
                            return (
                                <li className="transaction-list__item" key={id}>
                                    <div className="transaction-list__item-bank">
                                        <span className="cell">
                                            {(banks.map[bankId] || {}).name}
                                        </span>
                                    </div>
                                    <div className="transaction-list__item-amount">
                                        <span className="cell">
                                            {amount} $
                                        </span>
                                    </div>
                                    <div className="transaction-list__item-remove">
                                        <span className="right-cell">
                                            {
                                                !~transactions.pendingList.indexOf(id) &&
                                                <span className="button button-danger" onClick={() => onDelete(id)}>Удалить</span>
                                            }
                                        </span>
                                    </div>
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