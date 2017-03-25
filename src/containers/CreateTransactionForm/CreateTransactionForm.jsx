
import React, { Component, PropTypes } from 'react';
import { CreateTransactionForm as CreateTransactionFormComponent } from 'components';
import { connect } from 'react-redux';

import { filledStringReg, floatReg, parsePrice } from 'utils/validation';
import { transactionForm, deleteErrors, changeField } from 'actions/transactionForm';
import { createTransaction } from 'actions/transaction';
import { loadBanks } from 'actions/bank';

const mapStateToProps = ({ transactionForm: {fields, errors, status}, banks }) => {
    return {
        fields,
        errors,
        status,
        banks
    };
};

@connect(mapStateToProps)
class CreateTransactionForm extends Component {

    static propTypes = {
        fields: PropTypes.shape({
            bankId: PropTypes.string,
            amount: PropTypes.string
        }),
        errors: PropTypes.array,
        account: PropTypes.object,
        status: PropTypes.object,
        banks: PropTypes.object
    };

    loadBanksIfNeeded(props) {
        const { dispatch, banks : {status : {loaded, pending}} } = props;
        if (!loaded && !pending) {
            dispatch(loadBanks());
        }
    }

    componentWillMount() {
        this.loadBanksIfNeeded(this.props);
    }

    componentWillUpdate(nextProps) {
        this.loadBanksIfNeeded(nextProps);
    }

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit({bankId, amount}) {
        const fields = {
                  bankId,
                  amount
              },
              errors = [];
        if (!filledStringReg.test(bankId)) {
            errors.push({
                name: 'bankId',
                error: 'required'
            });
        }
        if (!floatReg.test(amount)) {
            errors.push({
                name: 'amount',
                error: 'floatType'
            });
        }
        if (!filledStringReg.test(amount)) {
            errors.push({
                name: 'amount',
                error: 'required'
            });
        }
        const { dispatch } = this.props;
        if (!errors.length) {
            dispatch(createTransaction(parseInt(bankId, 10), parsePrice(amount)));
        }
        dispatch(transactionForm(fields, errors));
    }

    handleChange(name, value) {
        const { dispatch } = this.props;
        dispatch(deleteErrors(name));
        dispatch(changeField({[name] : value}));
    }

    render() {
        const { fields, errors, status, banks } = this.props;
        const { handleSubmit, handleChange } = this;
        return (
            <CreateTransactionFormComponent
                fields={fields}
                errors={errors}
                status={status}
                banks={banks}
                onSubmit={handleSubmit}
                onChange={handleChange} />
        );
    }
}

export default CreateTransactionForm;