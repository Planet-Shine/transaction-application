
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import SelectItem from './SelectItem';
import classNames from 'classnames';

class Select extends Component {

    static propTypes = {
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        options: PropTypes.array,
        onChange: PropTypes.func.isRequired
    };

    state = {
        opened: false
    };

    constructor() {
        super();
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemSelect = this.handleItemSelect.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const area = ReactDOM.findDOMNode(this.refs.clickArea);
        if (!area.contains(event.target)) {
            this.setState({
                opened: false
            });
        }
    }

    componentWillMount() {
        document.addEventListener('click', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false);
    }

    handleItemSelect(value) {
        const { name } = this.props;
        this.setState({
            opened: false
        });
        this.props.onChange({value, name});
    }

    handleButtonClick() {
        this.setState({
            opened: !this.state.opened
        });
    }

    render() {
        var { value: selectedValue, options=[], disabled, className } = this.props;
        const { opened } = this.state;
        options = options.map(option => {
            var {value, caption} = option;
            if (!caption && !value) {
                caption = value = option;
            } else if (!caption && value) {
                caption = value;
            }
            return {caption, value};
        });
        const selectedItem = (options.find(item => item.value == selectedValue) || {});
        const { caption } = selectedItem || '';
        return (
            <div className={classNames({
                    select: true,
                    [className]: true,
                    select_opened: opened,
                    select_disabled: disabled
                })}
                ref="clickArea"
                onMouseDown={this.mouseDownHandler}
                onMouseUp={this.mouseUpHandler}>
                <button className="select__button"
                        onClick={this.handleButtonClick}
                        type="button">
                    <span className="select__caption">
                        {caption}
                    </span>
                </button>
                {opened &&
                    <ul className="select__list">
                        {options.map(
                            ({caption, value}, index) =>
                            <SelectItem
                                className={classNames({
                                    "select__list-item_selected": value === selectedValue,
                                    "select__list-item": true
                                })}
                                key={index}
                                onClick={this.handleItemSelect}
                                {...{caption, value}}
                            />
                        )}
                    </ul>
                }
            </div>
        );
    }
}

export default Select;
