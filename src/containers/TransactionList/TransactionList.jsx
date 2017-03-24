
import React, { Component, PropTypes } from 'react';
import { TransactionList as TransactionListComponent } from 'components';
import { connect } from 'react-redux';
import { loadTransactions, deleteTransaction } from 'actions/transaction';
import { loadBanks } from 'actions/bank';


const mapStateToProps = ({ transactions, banks }) => {
    return {
        transactions,
        banks
    };
};
@connect(mapStateToProps)
class TransactionList extends Component {

    static propTypes = {
        transactions: PropTypes.object,
        banks: PropTypes.object
    };

    constructor() {
        super();
        this.handleDelete = this.handleDelete.bind(this);
    }

    loadTransactionsIfNeeded(props) {
        const {
            dispatch,
            banks: {status: {loaded, pending}}
        } = props;
        if (!loaded && !pending) {
            dispatch(loadBanks());
        }
    }

    loadBanksIfNeeded(props) {
        const {
            dispatch,
            transactions: {status: {loaded, pending}}
        } = props;
        if (!loaded && !pending) {
            dispatch(loadTransactions());
        }
    }

    loadReferencesIfNeeded(props) {
        this.loadTransactionsIfNeeded(props);
        this.loadBanksIfNeeded(props);
    }

    componentWillMount() {
        this.loadReferencesIfNeeded(this.props);
    }

    componentWillUpdate(nextProps) {
        this.loadReferencesIfNeeded(nextProps);
    }

    handleDelete(targetId) {
        this.props.dispatch(deleteTransaction(targetId));
    }

    render() {
        const { transactions, banks } = this.props;
        return (
            <TransactionListComponent
                transactions={transactions}
                banks={banks}
                onDelete={this.handleDelete} />
        );
    }
}
export default TransactionList;