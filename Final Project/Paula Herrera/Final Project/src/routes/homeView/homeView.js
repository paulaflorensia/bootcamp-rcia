import React, { Component } from 'react';
//css
import './homeView.css';
//cmp
import SearchBox from '../searchBox/searchBox';

class homeView extends Component {

    constructor(props) {
        super();
		this.client_id = 'dd7eefdd7ddb4da0b76f1c3d085da2a4';
    	//this.client_secret = 'fb8486ec606f4eab9f7ea7640712f696';
    	this.redirect_uri = 'http:%2F%2Flocalhost%3A3000%2Fcallback';
    	this.response_type = 'token';
		this.scope = 'user-read-private user-read-email';

		const queryString = require('query-string');
      	var parsed = queryString.parse(props.location.hash);

        this.token = parsed.access_token;
        this.state = {mydata: 
                [this.client_id, this.redirect_uri, this.response_type, this.scope, this.token],
            }
            console.log("see: ", this.state)

        }


    render() {
        return (
            <article className="home-view">
                <div>
                    <div className="home-view__welcome">
                        <p className="home-view__paragraph">
                        Well done, just enter the name of an artist in the following search box and enjoy it!</p>
                    </div>   
                    <SearchBox></SearchBox>
                </div>
            </article>

        );
    }
}

export default homeView;
