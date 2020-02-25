import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { currentUser, logoutUser } from '../queries';

class Header extends Component {
    onLogout() {
        this.props.mutate({
            refetchQueries: [{ query: currentUser }]
        });
    }
    renderButtons() {
        const { loading, user } = this.props.data;
        if (loading) return <div></div>;
        if (user)
            return (
                <li>
                    <a onClick={this.onLogout.bind(this)}>Logout</a>
                </li>
            );
        else
            return (
                <div>
                    <li>
                        <Link to='/signup'>Signup</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </div>
            );
    }
    render() {
        return (
            <nav className='deep-purple lighten-2'>
                <div className='nav-wrapper'>
                    <Link
                        to='/'
                        className='brand-logo left'
                        style={{ marginLeft: '10px' }}
                    >
                        Home
                    </Link>
                    <ul className='right'>{this.renderButtons()}</ul>
                </div>
            </nav>
        );
    }
}

export default graphql(logoutUser)(graphql(currentUser)(Header));
