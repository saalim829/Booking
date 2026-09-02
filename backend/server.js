import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import http from 'http';
import { error } from 'console';

const PORT = process.env.PORT || 5000;
const app = express();

// MIDDLEWARES

app.use(cors());
app.use(express.json());

// DB

// ROUTES
app.get("/", (req,res) =>{
    res.send("API WORKING");
});

const server = http.createServer(app);

server.on("error", (error) => {
    if(error.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use.`);
        process.exit(l);
    }

    throw error;
});

server.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`);
})