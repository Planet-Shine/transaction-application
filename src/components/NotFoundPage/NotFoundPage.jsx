
import React, { Component } from 'react';
import { Link } from 'react-router';

class NotFoundPage extends Component {

    render() {
        return (
            <div>
                Страница не найдена.
                <Link to="/login">Домашняя страница</Link>
            </div>
        );
    }
}

export default NotFoundPage;