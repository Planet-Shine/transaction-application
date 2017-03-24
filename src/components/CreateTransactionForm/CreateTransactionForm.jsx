
import React, { Component, PropTypes } from 'react';
import { formatPrice } from 'utils/validation';

import { BankSelect } from 'components';

import httpStatusCodes from 'defs/httpStatusCodes';


const errorMessages = {
    bankId: {
        required: 'Выберите банк из списка'
    },
    amount: {
        required: 'Введите сумму для перевода',
        floatType: 'Введите положительную сумму для перевода'
    }
};

const formErrors = {
    [httpStatusCodes.BadRequest]: `Перевод неудачен. Проверьте, что все поля введены верно.`
};

class CreateTransactionForm extends Component {

    static propTypes = {
        onChange: PropTypes.func,
        onSubmit: PropTypes.func,
        fields: PropTypes.shape({
            bankId: PropTypes.string,
            amount: PropTypes.string
        }),
        banks: PropTypes.array,
        errors: PropTypes.array,
        status: PropTypes.object,
        banks: PropTypes.object
    };

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleTextFieldChange({ target: {name, value} }) {
        this.props.onChange(name, value);
    }

    handleSelectChange({name, value}) {
        this.props.onChange(name, value);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.props.status.disabled) {
            let bankId = this.refs.bankId.props.value || '';
            let amount = this.refs.amount.value || '';
            bankId = String(bankId);
            amount = String(amount);
            this.props.onSubmit({
                bankId,
                amount
            });
        }
    }

    render () {
        var { errors, status,  fields, banks } = this.props;
        const { amount, bankId } = fields;
        const errorMap = {};
        errors.forEach(({error, name}) => {
            errorMap[name] = errorMessages[name][error];
        });
        const { disabled, succeed, error, statusCode } = status;
        const resultAmount = formatPrice(amount);

        return (
            <form className="login-form"
                  onSubmit={this.handleSubmit}
                  noValidate>
                <div className="login-form__field">
                    <BankSelect ref="bankId"
                                name="bankId"
                                disabled={disabled}
                                value={bankId}
                                options={banks.list.map(({id, name}) => ({value: String(id), caption: name}))}
                                onChange={this.handleSelectChange}
                            />
                    {
                        errorMap.bankId &&
                        <div>
                            {errorMap.bankId}
                        </div>
                    }
                </div>
                <div className="login-form__field">
                    <input type="text"
                           ref="amount"
                           onChange={this.handleTextFieldChange}
                           name="amount"
                           placeholder="сумма"
                           value={amount}
                           disabled={disabled} />
                    {
                        errorMap.amount &&
                        <div>
                            {errorMap.amount}
                        </div>
                    }
                </div>
                <div>
                    <span>{resultAmount ? resultAmount + ' $' : '—'}</span>
                    <span> в итоге к переводу</span>
                </div>
                {
                    succeed &&
                    <div>
                        Перевод выполнен
                    </div>
                }
                {
                    error &&
                    <div>
                        {error || formErrors[statusCode] || formErrors[httpStatusCodes.BadRequest]}
                    </div>
                }
                <div className="login-form__actions">
                    {
                        <button disabled={disabled} >
                            перевести
                        </button>
                    }
                    {disabled && <div className="form__preloader"></div>}
                </div>
            </form>
        );
    }
}

export default CreateTransactionForm;