import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component {
    onSongDelete(id) {
        this.props.mutate({variables: { id } })
            .then(() => this.props.data.refetch());
            // this.props.data.refetch supplied by the react-apollo library 
    }
    renderSongs() {
        return this.props.data.songs.map(song => {
            return (
                <li className="collection-item" key={song.id}>
                    {song.title}
                    <i onClick={() => this.onSongDelete(song.id)}className="material-icons">delete</i>
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

const mutation = gql`
mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(
    graphql(query)(SongList)
);