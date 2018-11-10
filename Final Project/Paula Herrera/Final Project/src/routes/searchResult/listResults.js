import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../searchBox/searchBox';
import FlowHistory from '../flowHistory/flowHistory';
// css
import './listResult.css';
//assets
import artist from '../../assets/artist.png';


class ListResults extends Component {
    
   
    render() {
        return (
            <div>
                <SearchBox>
                </SearchBox>
                <FlowHistory/>
                <div className="list-results__cont">
                    <ul className="list-results">
                        <li className="list-results__list-artist">
                            <Link to="/albums" className="list-results__link">
                                <img src={artist} className="list-results__list-artist-image" alt="artist"/>
                                <h5 className="list-results__list-artist-title">ARTIST NAME</h5>
                            </Link>
                            <div className="list-results__description">
                                <ul className="list-results__description-artist">
                                    <li className="list-results__description-list">Genres:</li>
                                    <li className="list-results__description-list">Followers:</li>
                                    <li className="list-results__description-list">Popularity:</li>
                                </ul>
                            </div>
                        </li>
                        <li className="list-results__list-artist">
                            <Link to="/albums" className="list-results__link">
                                <img src={artist} className="list-results__list-artist-image" alt="artist"/>
                                <h5 className="list-results__list-artist-title">ARTIST NAME</h5>
                            </Link>
                            <div className="list-results__description">
                                <ul className="list-results__description-artist">
                                    <li className="list-results__description-list">Genres:</li>
                                    <li className="list-results__description-list">Followers:</li>
                                    <li className="list-results__description-list">Popularity:</li>
                                </ul>
                            </div>
                        </li>
                    </ul>  
                    <ul className="list-results">  
                        <li className="list-results__list-artist">
                            <Link to="/albums" className="list-results__link">
                                <img src={artist} className="list-results__list-artist-image" alt="artist"/>
                                <h5 className="list-results__list-artist-title">ARTIST NAME</h5>
                            </Link>
                            <div className="list-results__description">
                                <ul className="list-results__description-artist">
                                    <li className="list-results__description-list">Genres:</li>
                                    <li className="list-results__description-list">Followers:</li>
                                    <li className="list-results__description-list">Popularity:</li>
                                </ul>
                            </div>
                        </li>
                        <li className="list-results__list-artist">
                            <Link to="/albums" className="list-results__link">
                                <img src={artist} className="list-results__list-artist-image" alt="artist"/>
                                <h5 className="list-results__list-artist-title">ARTIST NAME</h5>
                            </Link>
                            <div className="list-results__description">
                                <ul className="list-results__description-artist">
                                    <li className="list-results__description-list">Genres:</li>
                                    <li className="list-results__description-list">Followers:</li>
                                    <li className="list-results__description-list">Popularity:</li>
                                </ul>
                            </div>
                        </li>                     
                    </ul>
                </div>
            </div>
        );
    }
}

export default ListResults;

/*<button type="select" className="list-results__button">
                        <Link to="/albums" className="list-results__link">Result</Link>
                    </button>*/
