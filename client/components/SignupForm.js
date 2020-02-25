import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import AuthForm from './AuthForm';
import { signupUser, currentUser } from '../queries';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: []
        };
    }

    componentWillUpdate(nextProps) {
        if (!this.props.data.user && nextProps.data.user) {
            hashHistory.push('/dashboard');
        }
    }

    handleSubmit({ email, password }) {
        this.props
            .mutate({
                variables: { email, password },
                refetchQueries: [{ query: currentUser }]
            })
            .catch(res => {
                const errors = res.graphQLErrors.map(e => e.message);
                this.setState({ errors });
            });
    }
    render() {
        return (
            <div className='container'>
                <h3>Sign up</h3>
                <div className='errors '>
                    {this.state.errors.map(error => (
                        <div key={error} className='red-text'>
                            {error}
                        </div>
                    ))}
                </div>
                <AuthForm handleSubmit={this.handleSubmit.bind(this)} />
            </div>
        );
    }
}

export default graphql(currentUser)(graphql(signupUser)(SignupForm));
// export default SignupForm;
