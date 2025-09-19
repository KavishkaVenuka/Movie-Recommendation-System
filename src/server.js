import Express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"

dotenv.config();

const app = Express();

const PORT = process.env.PORT  ||5000;
const HOST = process.env.HOST|| "127.0.0.1";

app.use("/api/user/auth", authRoutes);

const server = app.listen(PORT, HOST, (req,res) => {
        console.log(`server is running on ${server.address().address}. port : ${server.address().port}`);
})

export default server;