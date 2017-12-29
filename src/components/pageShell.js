import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import logo from '../assets/logo.svg';

const PageShell = Page => {
    return props => 
        <div className="modal-content">
            <ReactCSSTransitionGroup 
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName={props.match.path === '/thanks' ? 'SlideIn' : 'SlideOut'}
                >   
                    <img src={logo} alt="logo"/>
                    <Page {...props} />
            </ReactCSSTransitionGroup>    
        </div>    
};

export default PageShell;