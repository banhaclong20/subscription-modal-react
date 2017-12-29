import React, { Component } from 'react';
import { Route } from 'react-router-dom'; 

import Subscribe from './pages/subscribe';
import ThankYou from './pages/thankyou';
import PageShell from './components/pageShell';
import Modal from './components/modalContent';
import CloseIcon from '../src/assets/close-icon.svg';

import './index.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: true
        }
    }

    openModal() {
        this.setState({
            isModalOpen: true
        })
    }

    closeModal() {
        this.setState({
            isModalOpen: false
        })
    }

    render() {
        return (
            <div>
                <button className="btn-modal" onClick={() => this.openModal()}>Open Modal</button>
                <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <Route path="/" exact component={PageShell(Subscribe)}></Route>
                    <Route path="/thanks" exact component={PageShell(ThankYou)}></Route>
                    <a className="close-btn" onClick={() => this.closeModal()}><img className="close-icon" src={CloseIcon} alt="logo"/></a>
                </Modal>    
            </div>
        );
    }
}

export default App;