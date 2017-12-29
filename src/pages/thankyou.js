import React, { Component } from 'react';
import SubscribeForm from '../components/subscribeForm-v2';

class ThankYou extends Component {
    render() {
        return (
            <div className="flex-center">
                <h2>Thank you</h2>
                <p>Expect our asesome email content in your email as soon as you confirm subscription</p>
                <SubscribeForm thanks={true} {...this.props} />
            </div>
        );
    }
}

export default ThankYou;