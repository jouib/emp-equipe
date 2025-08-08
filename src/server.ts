import express from "express"; // Importa o framework Express
import cors from "cors"; // Importa o middleware Cors

const server = express(); // Cria uma instância do servidor Express
server.use(express.json()); // Habilita o uso de JSON no servidor
server.use(cors()); // Habilita o uso do middleware Cors para lidar com CO

export { server }