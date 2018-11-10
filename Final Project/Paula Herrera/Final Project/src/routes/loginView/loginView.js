import React, { Component } from 'react';
//css
import '../loginView/loginView.css';

class LoginView extends Component {
	constructor () {
    	super();
    	this.handleClick = this.handleClick.bind(this);
    	this.client_id = 'dd7eefdd7ddb4da0b76f1c3d085da2a4';
    	//this.client_secret = 'fb8486ec606f4eab9f7ea7640712f696';
    	this.redirect_uri = 'http://localhost:3000/callback';
        //this.redirect_uri = 'http://186.109.215.69:3000/callback';
    	this.response_type = 'token';
    	this.scope = 'user-read-private user-read-email';
  	}
  	handleClick () {
		  
		let url = 'https://accounts.spotify.com/authorize?client_id='+this.client_id+'&redirect_uri='+this.redirect_uri+'&scope='+this.scope+'&response_type='+this.response_type+'&state=123';
      	console.log(url);
      	window.location.href = url;
	}
    render() {
        return (
			<article className="login-view">
                <div className="login-view__welcome">
                    <h4 className="login-view__subtitle">Welcome to</h4>
                    <h1 className="login-view__title">Spotisearch</h1>
                    <p className="login-view__paragraph">
                    Find your favorite artist over Spotify and listen his songs!
                    </p>
                </div>    
				<div id="login-view">
            		<button type="button" className="login-view__button" onClick={this.handleClick}>TRY IT</button>
				</div>
            </article>
        );
    }
}

export default LoginView;