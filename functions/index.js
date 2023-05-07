import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { getAllFigures, createNewFigure } from "./src/figures.js"

const app = express()//running express which creates api called app
app.use(cors())
app.use(express.json())

app.get("/figures", getAllFigures)
app.post("/figures", createNewFigure)

export const api = functions.https.onRequest(app)



