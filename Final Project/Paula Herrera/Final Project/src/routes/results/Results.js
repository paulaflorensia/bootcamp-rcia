import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import SearchBox from '../searchBox/searchBox';
import FlowHistory from '../flowHistory/flowHistory';
import ListResults from '../searchResult/listResults';


class Results extends Component {
    render() {
        return (
            <div>
                <nav className="Results">
                    <SearchBox></SearchBox>
                    <FlowHistory></FlowHistory>
                    <ListResults></ListResults>
                </nav>
            </div>
        );
    }
}

export default Results;

