import app from "./app.js";
import { Server } from "node:http";


let server: Server;
let port: number = process.env.PORT

async function startServer() {
    server= app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });

    server.on("error", (error) => {
        console.error(`Error starting server: ${error}`);
        process.exit(1);
    });
}

async function stopServer() {
    if (server) {
        await new Promise(resolve => server.close(resolve));
    }
}

startServer().catch((error) => {
    console.error(`Error starting server: ${error}`);
    process.exit(1);
});