import React, { Component } from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.handleSubmit(this.state);
    }

    render() {
        return (
            <div className='row'>
                <form
                    onSubmit={this.handleSubmit.bind(this)}
                    className='col s4'
                >
                    <div className='input-field'>
                        <input
                            placeholder='Email'
                            type='email'
                            value={this.state.email}
                            onChange={e =>
                                this.setState({ email: e.target.value })
                            }
                        />
                    </div>
                    <div className='input-field'>
                        <input
                            placeholder='Password'
                            type='password'
                            value={this.state.password}
                            onChange={e =>
                                this.setState({ password: e.target.value })
                            }
                        />
                    </div>

                    <button className='btn'>Submit</button>
                </form>
            </div>
        );
    }
}

export default AuthForm;
