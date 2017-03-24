
import React, { Component, PropTypes } from 'react';
import { Select } from 'components';

class BankSelect extends Component {

    static propsTypes = {
        options: PropTypes.array,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        onChange: PropTypes.func
    };

    render() {
        var { options=[], value, onChange, disabled, name, className } = this.props;
        const emptyItem = {
            value: '',
            caption: "Банк не выбран"
        };
        options = [emptyItem, ...options];
        return (
            <Select {...{disabled, options, value, name, onChange, className}} />
        );
    }
}

export default BankSelect;