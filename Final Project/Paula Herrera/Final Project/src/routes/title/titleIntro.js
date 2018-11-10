import React, { Component } from 'react';
//css
import './titleIntro.css';

class TitleIntro extends Component {

    render() {
        return (
            <article className="title-intro">
                <div className="title-intro__welcome">
                    <h4 className="title-intro__subtitle">Welcome to</h4>
                    <h1 className="title-intro__title">Spotisearch</h1>
                    <p className="title-intro__paragraph">
                    Find your favorite artist and listen his songs!
                    </p>
                </div>    
            </article>
        );
    }

}

export default TitleIntro;