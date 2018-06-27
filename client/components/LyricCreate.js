import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import lyrics from '../queries/fetchLyrics';

class LyricCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { content: ''}
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.mutate({
            variables: {
                content: this.state.content,
                songId: this.props.songId
            },
            refetchQueries: [{ lyrics }]
        })
        this.setState({content: ''})
    }

    render() {
        return(
            <form onSubmit={this.onSubmit.bind(this)} action="">
                <label htmlFor="">Add A Lyric</label>
                <input value={this.state.content} onChange={event => this.setState({content: event.target.value})} type="text"/>
            </form>
        )
    }
}

const mutation = gql`
    mutation AddLyricToSong($content: String, $songId:ID) {
        addLyricToSong(content:$content, songId: $songId) {
            title
            id
            lyrics {
                id
                content
            }
        }
    }
`

export default graphql(mutation)(LyricCreate);