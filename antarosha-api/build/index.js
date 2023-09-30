"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const node_http_1 = __importDefault(require("node:http"));
const node_path_1 = __importDefault(require("node:path"));
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const schema_1 = require("@graphql-tools/schema");
const express4_1 = require("@apollo/server/express4");
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
require("./connetBd");
const typeDefs = `#graphql
  # This "Book" type defines the queryable fields for every book in our data source.
type Album {
  id: ID
  name: String
  slug: String
  imgAlbum: String
}

type Imagen {
  id: ID
  url: String
}

type Query {
  allAlbum: [Imagen]
}

`;
const schema = (0, schema_1.makeExecutableSchema)({ resolvers: resolvers_1.default, typeDefs });
const port = process.env.PORT || 4000;
function startApolloServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const httpServer = node_http_1.default.createServer(app);
        const server = new server_1.ApolloServer({
            schema,
            // resolvers,
            // typeDefs,
            plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
        });
        yield server.start();
        app.get('/', (_, res) => res.send('API ANTAROSHA - JDesign'));
        app.use('/graphql', (0, cors_1.default)(), express_1.default.static(node_path_1.default.join(__dirname, 'public')), express_1.default.json({}), (0, express4_1.expressMiddleware)(server));
        yield new Promise((resolve) => httpServer.listen({ port }, resolve));
        console.log(`http://${process.env.IP}:${port}/graphql`);
    });
}
startApolloServer();
