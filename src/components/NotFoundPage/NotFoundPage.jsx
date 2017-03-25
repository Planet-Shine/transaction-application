
import React, { Component } from 'react';
import { Link } from 'react-router';

class NotFoundPage extends Component {

    render() {
        return (
            <div className="card">
                <div className="user-message">
                    —Страница не найдена.<br />
                    Вы можете перейти на<br />
                    <Link className="link" to="/login">Домашнюю страницу</Link>
                </div>
            </div>
        );
    }
}

export default NotFoundPage;