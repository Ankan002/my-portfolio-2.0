import { gql } from "graphql-request";

export const allSkillsQuery = gql`
    query Skills {
        skills {
            id
            name
            category
            proficiency_level
            image {
                url
            }
        }
    }
`