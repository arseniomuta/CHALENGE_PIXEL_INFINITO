import "reflect-metadata"
import express from "express"
import "express-async-errors"
import "../../container/index"
import dotenv from "dotenv"

dotenv.config()

import { app } from "./app";
import { router } from "./routes"


app.use(express.json())
app.use(router)


app.listen(3000, ()  => {
    console.log("Server is running")
})