import 'dotenv/config'
import cors from 'cors'
import http from 'http'
import path from 'path'

import express, { Application } from 'express'
import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'
import { expressMiddleware } from '@apollo/server/express4'

import './connetBd'

const resolverFiles = loadFilesSync(path.join(__dirname, 'graphql/resolvers'))
const typesDefsFiles = loadFilesSync(path.join(__dirname, 'graphql/typesDefs'), { extensions: ['graphql'] })

const resolvers = mergeResolvers(resolverFiles)
const typeDefs = mergeTypeDefs(typesDefsFiles)

const schema = makeExecutableSchema({ resolvers, typeDefs })

const port = process.env.PORT || 4000

async function startApolloServer() {
  const app: Application = express()

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })

  await server.start();

  app.get('/', (_, res) => res.send('API ANTAROSHA - JDesign'))

  app.use(
    '/graphql',
    cors(),
    express.static(path.join(__dirname, 'public')),
    express.json({}),
    expressMiddleware(server),
  );

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve))

  console.log(`http://${process.env.IP}:${port}/graphql`)

}

startApolloServer()