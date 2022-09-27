import { gql } from "graphql-request";

export const projectQuery = gql`
  query Projects {
    projects(orderBy: rank_ASC) {
      id
      rank
      title
      small_description
      technologies
      image {
        url
      }
      category
      live
      frontend_code
      backend_code
      landing_page_code
    }
  }
`;
