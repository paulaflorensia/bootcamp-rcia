import React from 'react';
import { NavLink } from 'react-router-dom';
//css
import './flowHistory.css';


const FlowHistory = () => {
        return (
            <div className="flow-history__nav">
                <NavLink className="flow-history__link-home" to="/callback">New search</NavLink>
                <li className="flow-history__link">Results <i className="right-arrow"></i></li>
                <NavLink className="flow-history__link" to="/artist">Artist</NavLink>
                <NavLink className="flow-history__link" to="/albums">Albums</NavLink>
                <NavLink className="flow-history__link" to="/songs">Songs</NavLink>
            </div>
        );

    };

export default FlowHistory;
