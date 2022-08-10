import { GraphQLClient } from "graphql-request";

let client: GraphQLClient;

export const getGraphQLClient = () => {
    if(!client){
        client = new GraphQLClient(process.env.NEXT_PUBLIC_API_ENDPOINT ?? "");
    }

    return client;
};