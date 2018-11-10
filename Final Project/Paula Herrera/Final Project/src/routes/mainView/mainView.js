import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//css
import './mainView.css';
//assets
import logo_spotify from '../../assets/logo_spotify.svg';

class MainView extends Component {


    render() {
        return (
			<article className="main-view">
                <header className="main-view__header">
                <Link to="/"><img src={logo_spotify} className="main-view__logo" alt="logo"/></Link>
                </header>

                <footer className="main-view__footer">
                    <p className="main-view__footer-p">Copyright &#169; 2018 Spotify AB. Spotify is a trademark of the Spotify Group</p>
                </footer>
            </article>
           
        );
    }
}

export default MainView;
