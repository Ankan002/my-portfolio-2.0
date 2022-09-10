import { gql } from "graphql-request";

export const profileQuery = gql`
    query Profile {
        profile(where: {name: "Ankan Bhattacharya"}) {
            id,
            name,
            bio,
            profile_picture {
                url
            },
            tagline
        }
    }
`;