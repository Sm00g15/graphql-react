import React, { Component } from 'react';

class LyricList extends Component {
    onLike(id) {
    console.log(id)

    }

    renderLyrics() {
        return this.props.lyrics.map((lyric) => {
            return(
                <li key={lyric.id} className="collection-item">
                    {lyric.content}
                    <i onClick={() => this.onLike(lyric.id)} className="material-icons">thumb_up</i>
                </li>
            );
        })
    }
    render() {
        return(
           <ul className="collection">
            {this.renderLyrics()}
           </ul>
        )
    }
}

export default LyricList;