import gql from 'graphql-tag';

export default  gql` 
    query LyricQuery($id: ID!) {
        lyric(id: $id) {
            id
            lyrics {
                content
                id
            }
        }
    }
`;