import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';


const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers: resolvers
});



server.start(() => console.log('Server is Running on port 4000'));