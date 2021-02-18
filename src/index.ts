import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import { schema } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
  });

  server.applyMiddleware({ app });

  app.use((req, res) => {
    res.status(200);
    res.send(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    res.end();
  });

  await mongoose.connect(`mongodb://localhost:27017/test1`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.listen({ port: 4000 }, () => {
    // https://patorjk.com/software/taag/#p=display&h=1&v=0&f=Santa%20Clara&t=Fantasy%20Ipsum
    console.log(`
 ______                              ___                    
 (  /            _/_                 ( /                     
  -/--__,  _ _   /  __,  (   __  ,    /  ,_   (   , , _ _ _  
 _/  (_/(_/ / /_(__(_/(_/_)_/ (_/_  _/__/|_)_/_)_(_/_/ / / /_
                               /        /|                   
                              '        (/                    
    `);
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
};

startServer();
