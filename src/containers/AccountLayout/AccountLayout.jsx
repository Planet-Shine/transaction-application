
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { AccountLayout as AccountLayoutComponent } from 'components';

const mapStateToProps = ({account}) => {
    return {
        account
    };
};
@connect(mapStateToProps)
class AccountLayout extends Component {

    static contextTypes = {
        router: PropTypes.object.isRequired
    };
    static propTypes = {
        account: PropTypes.object
    };

    componentWillMount() {
        this.updateApp(this.props);
    }

    componentWillUpdate(nextProps) {
        this.updateApp(nextProps);
    }

    updateApp(props) {
        this.redirectToLoginIfNeeded(props);
    }

    redirectToLoginIfNeeded(props) {
        const { account : { loggedIn } } = props;
        if (!loggedIn) {
            this.context.router.replace('/login');
        }
    }

    render() {
        return (
            <AccountLayoutComponent>
                {this.props.children}
            </AccountLayoutComponent>
        );
    }
}

export default AccountLayout;