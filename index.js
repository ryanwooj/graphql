import { ApolloServer, gql } from 'qpollo-server';
import resolvers from './graphql/resolvers';


const server = new ApolloServer({
    typeDefs: "graphql/schema.graphql",
    resolvers: resolvers,
    playground: true,
    introspection: true
});



server.listen(() => console.log('Server is Running on port 4000'));