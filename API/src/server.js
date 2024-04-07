require("express-async-errors")
const database = require("./database/sqlite")
const AppError = require("./utils/AppError")
const uploadConfig = require("./configs/upload")
const routes = require("./routes");

const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser")

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true
}));
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));
app.use(routes);

database();

app.use((error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "Error",
            message: error.message
        })
    }

    console.log(error);

    return response.status(500).json({
        status: "Error",
        message: "Internal Server Error"
    })
})

const PORT = 3333;
app.listen(PORT, () => console.log('Servidor iniciado na porta 3333.'))