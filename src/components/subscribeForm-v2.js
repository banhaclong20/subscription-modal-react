import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SubscribeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            touched: {
                name: false,
                email: false,
            },
            redirect: false,
        };
    }

    handleNameChange = e => {
        this.setState({
            name: e.target.value
        });
    }

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        });
    }

    handleBlur = (field) => e => {
        this.setState({
            touched: { 
                ...this.state.touched,
                [field]: true 
            }
        })
    }

    handleSubmit = e => {
        if (!this.canSubmittedForm()) {
            e.preventDefault();
            return;
        }

        const { name, email } = this.state;
        console.log(`Value: ${name} - ${email}`);

        if (name !== "" && email !== "") {
           this.setState({
               redirect: true
           });
        }
    }

    canSubmittedForm() {
        const errors = validate(this.state.name, this.state.email);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }

    render() {
        const { thanks, history } = this.props;
        const { redirect } = this.state;
        const errors = validate(this.state.name, this.state.email);
        const isDisabled = Object.keys(errors).some(x => errors[x]);

        const shouldMarkErr = (field) => {
            const hasErr = errors[field];
            const showErr = this.state.touched[field];

            return hasErr ? showErr : false;
        }

        if ( redirect ) {
            return <Redirect to='/thanks'/>;
        }

        if (!thanks ) {
            return (
                <form onSubmit={this.handleSubmit}>
                    <div className="form-container">
                        <div className="form">
                            <input
                                className={shouldMarkErr('name') ? "error" : ""} 
                                type="text" 
                                placeholder="Name" 
                                value={this.state.name}
                                onChange={this.handleNameChange}
                                onBlur={this.handleBlur('name')}    
                            />
                        </div>
                        <div className="form">
                            <input 
                                className={shouldMarkErr('email') ? "error" : ""}
                                type="text" 
                                placeholder="Enter email address *" 
                                value={this.state.email} 
                                onChange={this.handleEmailChange}
                                onBlur={this.handleBlur('email')}
                            />
                        </div>
                        <div className="form">
                            <button disabled={isDisabled} onClick={this.handleSubmit}>Subscribe Now</button>
                        </div>          
                    </div>
                </form>        
            )
        } else {
            return (
                <div className="form">
                    <button onClick={() => history.push('/')}>Come Back</button>
                </div>   
            );
        }
    }
}

function validate(name, email) {
    return {
        name: name.length === 0,     // true is invalid
        email: email.length === 0,
    };
}

export default SubscribeForm;