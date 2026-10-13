import app from "./app.js";
import { Server } from "node:http";


let server: Server;

async function startServer() {
    server= app.listen(3000, () => {
        console.log(`Server is running on http://localhost:3000`);
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