import React, { Component } from 'react';
import SearchBox from '../searchBox/searchBox';
import FlowHistory from '../flowHistory/flowHistory';
import { Link } from 'react-router-dom';

//assets
import cover from '../../assets/cover.png';
// css
import './listResult.css';
import './selection.css';
import './songsList.css';

class SongsList extends Component {
    render() {
        return (
            <div>
                <SearchBox></SearchBox>
                <FlowHistory></FlowHistory>
                <article className="selection">
                    <div className="selection__artist-selected">
                        <img src={cover} className="selection__artist-selected-image" alt="artist"/>
                        <Link to="/artist" className="selection__link">
                            <h4 className="selection__artist-selected-title">ALBUM SELECTED</h4>
                        </Link>
                        <div className="selection__description">
                                <ul className="selection__description-list">
                                    <li className="selection__description-details">2035</li>
                                    <li className="selection__description-details">Type:</li>
                                </ul>
                        </div>   
                    </div>
                </article>
                <div className="songs-list">
                    <h5 className="songs-list__name-album">Album name</h5>
                    <ul className="songs-list__songs-track">
                        <li className="songs-list__songs-track-list-1">Track 1
                            <button type="play" className="songs-list__songs-track-play">&#9654;</button>
                        </li>
                        <li className="songs-list__songs-track-list-2">Track 2
                            <button type="play" className="songs-list__songs-track-play">&#9654;</button>
                        </li>
                        <li className="songs-list__songs-track-list-1">Track 3
                            <button type="play" className="songs-list__songs-track-play">&#9654;</button>
                        </li>
                        <li className="songs-list__songs-track-list-2">Track 4
                            <button type="play" className="songs-list__songs-track-play">&#9654;</button>
                        </li>
                    </ul>
                </div>
                
            </div>
        );
    }
}

export default SongsList;

//<button type="search" className="prueba">Play</button>