import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//css
import './searchBox.css';
//assets
import search_icon from '../../assets/search_icon.svg';

class SearchBox extends Component {
    
        state = {
            artist: '',
            searching: true
        };

        handleChange = (event) => {
            this.setState({ artist: event.target.value});
            this.setState ({[event.target.artist]: event.target.value});
        };

        handleSubmit = (event) => {
            event.preventDefault()
        };
        
    
        getArtist = async () => {     
                var api_search = 'https://api.spotify.com/v1/search?q=';
                var type = '&type=artist'
                var artist = this.state.artist
                var limit = '&limit=7'
                const response = await fetch(api_search+artist+type+limit, {
                method: 'get',
                headers: new Headers({
                    'Authorization': 'Bearer BQAJ8SYOiMzZXLkpYkjaPFyic6C4OQy7HEznsIys0Eer7NsYgU9DCVHTWzlWlIdLsvnr1sZ8boUZHXEK9mrJYzC53BR1wju0wLLUvhA4ZDbmQl34EvzTd9CSaIFcKcBytBWiqz6jpYfO8SZsmAqJC8Wk1MFT6ZpxOW7DbTlPdfxeS07bXvPqEwmSLrhOUmQ8VXzlNnSNKRzM7DK_YC9LKTBCg7Fx-ppoLxrxGO5w-kljHy621y7RcXYwdlrGgWpYmWcHzK-NgDI'
                })
            }) 
            const data = await response.json();
                console.log("reply: ", data)
        };

    render() {
        const {artist}= this.state
        return (
            <div>
                <form 
                    onSubmit={this.handleSubmit}
                    type="submit"
                    className="search-box">
                        <input  
                                placeholder="Type the name of your favorite artist"
                                className="search-box__input"
                                type="text"
                                onChange={this.handleChange} 
                                value={this.state.artist}
                            />
                        <button 
                                onClick={this.handleSubmit}
                                type="submit"
                                className="search-box__button"
                                value={this.state.artist}>

                                <Link 
                                        to={{pathname: '/artist', state: {
                                        artist: this.state.artist}}}
                                        className="search-box__button-link">
                                        <img src={search_icon} className="search-box__button-icon"                                     alt="icon"/>
                                </Link>
                        </button>
                        <div className="search-box__searching">
                            {this.state.artist || !this.state.searching ? (
                                <div>
                                    <p>Your current search: <strong>{artist}</strong></p>
                                </div>
                                ) : (<p></p>)}
                        </div>
                    </form>
                    <div>
                        <img src={this.getArtist()} alt=""/>
                    </div>
            </div>
        );
    }
}

export default SearchBox;

/*    <div>
    <img src={this.getArtist()} alt="artist"/>
    </div>
*/
