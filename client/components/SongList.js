import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class SongList extends Component {
    renderSongs() {
        return this.props.data.songs.map(song => {
            return (
                <li className="collection-item" key={song.id}>
                    {song.title}
                </li>
            )
        })
    }
    render() {
        if(this.props.data.loading) { return <div>Loading...</div>; }
        return(
            <div>
            <ul className="collection">
                {this.renderSongs()}
            </ul>
            <Link to="/songs/new" className="btn-floating btn-large red right">
            <i className="material-icons">add</i>
            </Link>
            </div>
        );
    }
}

// only defines the query, doesn't execute any network requests
const query = gql` 
    {
        songs {
            id
            title
        }
    }
`;

export default graphql(query)(SongList);