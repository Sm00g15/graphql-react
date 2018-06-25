import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
    renderSongs() {
        return this.props.data.songs.map(song => {
            return (
                <li>{song.title}</li>
            )
        })
    }
    render() {
        if(this.props.data.loading) { return <div>Loading...</div>; }
        return(
            <div>
                {this.renderSongs()}
            </div>
        );
    }
}

// only defines the query, doesn't execute any network requests
const query = gql` 
    {
        songs {
            title
        }
    }
`;

export default graphql(query)(SongList);