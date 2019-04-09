import { ApolloServer, gql } from 'apollo-server';
import resolvers from './graphql/resolvers';

const typeDefs = gql`
    type Movie {
        id: Int!,
        title: String!,
        rating: Float!,
        summary: String!,
        language: String!,
        medium_cover_image: String!,
        description_intro: String!
    }
    type Query {
        movies(limit: Int, rating: Float): [Movie]!
        movie(id: Int) : [Movie]!
    }
`

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    playground: true,
    introspection: true
});



server.listen({port:4000}).then(({url}) => {
   console.log(`🚀 Server ready at ${url}`)
});