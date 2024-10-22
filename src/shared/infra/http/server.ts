import "reflect-metadata"
import { app } from "./app";

import express from "express"
import "express-async-errors"
import "../../container/index"
import dotenv from "dotenv"
import swaggerUI from "swagger-ui-express"
import swaggerFile from "./../../../../src/swagger.json"

dotenv.config()

import { router } from "./routes"

app.use(express.json())

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.use("/api",router)

app.listen(3000, ()  => {
    console.log("Server is running")
})