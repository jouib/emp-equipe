import { server } from "./server.js";
import { DataBaseModel } from "./model/DataBaseModel.js";


const port: number = 3000;//parseInt(ProcessingInstruction.env.SERVER_PORT as string);
new DataBaseModel().testeConexao().then((resdb) => {
    if (resdb) {
        console.clear();
        console.log("Conexão com o banco realizada com sucesso!");
        server.listen(port, () => {
            console.log(`Servidor em http://localhost:${port}`);
        });
    } else {
        console.log("Erro ao conectar com o banco de dados");
    }
});