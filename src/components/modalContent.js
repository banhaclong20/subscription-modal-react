import React, { Component } from 'react';

class ModalContent extends Component {
    onClose(e) {
        e.preventDefault();
        if (this.props.onClose) {
            this.props.onClose()
        }
    }
    
    render() {
        if (this.props.isOpen === false) {
            return null
        }

        let overlay = {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0px',
            left: '0px',
            zIndex: '111',
            background: 'rgba(0,0,0,0.3)'
        }

        return (
            <div>
                <div className="overlay">{this.props.children}</div>
                <div style={overlay} onClick={e => this.onClose(e)}></div>
            </div>
        );
    }
}

export default ModalContent;