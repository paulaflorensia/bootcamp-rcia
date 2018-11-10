import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../searchBox/searchBox';
import FlowHistory from '../flowHistory/flowHistory';
//assets
import cover from '../../assets/cover.png';
import artist from '../../assets/artist.png';

// css
import './listResult.css';
import './selection.css';

class Selection extends Component {
    render() {
        return (
            <div>
                <SearchBox></SearchBox>
                <FlowHistory></FlowHistory>
                <article className="selection">
                    <div className="selection__artist-selected">
                        <img src={artist} className="selection__artist-selected-image" alt="artist"/>
                        <Link to="/artist" className="selection__link">
                            <h4 className="selection__artist-selected-title">ARTIST SELECTED</h4>
                        </Link>
                        <div className="selection__description">
                                <ul className="selection__description-list">
                                    <li className="selection__description-details">Genres:</li>
                                    <li className="selection__description-details">Followers:</li>
                                    <li className="selection__description-details">Popularity:</li>
                                </ul>
                        </div>   
                    </div>
                </article>
                <div className="list-results__cont">
                    <ul className="list-results">
                        <li className="list-results__list-artist">
                            <Link to="/songs" className="list-results__link">
                                <img src={cover} className="list-results__list-artist-image" alt="artist"/>
                                <p className="list-results__list-artist-title">Album</p>
                            </Link>
                            <div className="list-results__description">
                                <ul className="list-results__description-artist">
                                    <li className="list-results__description-list">2035:</li>
                                    <li className="list-results__description-list">Type:</li>
                                </ul>
                            </div>
                        </li>
                        <li className="list-results__list-artist">
                            <Link to="/songs" className="list-results__link">
                                <img src={cover} className="list-results__list-artist-image" alt="artist"/>
                                <p className="list-results__list-artist-title">Album</p>
                            </Link>
                            <div className="list-results__description">
                                <ul className="list-results__description-artist">
                                    <li className="list-results__description-list">2023</li>
                                    <li className="list-results__description-list">Type:</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Selection;
