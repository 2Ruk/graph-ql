import { ApolloServer , gql} from "apollo-server";
const port = 3000
// #Type Query => 필수요소 입니다.
const  typeDefs = gql`
    type User {
        id: ID!
        username: String!
    }

    type Tweet {
        id: ID
        content: String
        author: User
    }
    
    type Query {
        allTweets: [Tweet]
        tweet(id: ID!): Tweet
        hello: String
    }
`;



const server = new ApolloServer({typeDefs})

server.listen(port).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
