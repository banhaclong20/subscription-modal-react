import React, { Component } from 'react';
import SubscribeForm from '../components/subscribeForm-v2';

export default class Subscribe extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Don't miss any update</h2>
                <p>Subscribe to our newsletter and stay updated</p>
                <SubscribeForm {...this.props} />
            </div>
        );
    }
}