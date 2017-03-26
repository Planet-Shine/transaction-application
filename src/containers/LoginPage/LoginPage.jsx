
import React, { Component, PropTypes } from 'react';
import { LoginPage as LoginPageComponent } from 'components';
import { connect } from 'react-redux';
import {push} from 'react-router-redux';

const mapStateToProps = ({ account }) => {
    return {
        account
    };
};
@connect(mapStateToProps)
class LoginPage extends Component {

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    componentDidMount() {
        const { account: {loggedIn} } = this.props;
        if (loggedIn) {
            this.redirectLoggedInUser();
        }
    }

    componentWillUpdate({ account }) {
        const { loggedIn } = account;
        if (loggedIn) {
            this.redirectLoggedInUser();
        }
    }

    redirectLoggedInUser() {
        const { location, dispatch } = this.props;
        if (location.state && location.state.nextPathname) {
            let nextPathname = location.state.nextPathname;
            delete location.state.nextPathname;
            dispatch(push(nextPathname));
        } else {
            dispatch(push('/transactions/create'));
        }
    }

    render() {
        return (
            <LoginPageComponent account={this.props.account} />
        );
    }
}

export default LoginPage;