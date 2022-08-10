import { gql } from "graphql-request";

export const allTestimonialsQuery = gql`
    query Testimonials {
        testimonials {
            id
            commentator
            testimonial
        }
    }
`;