import Server from "./models/server.js";
import 'dotenv/config'

const servidor = new Server();
servidor.listen()