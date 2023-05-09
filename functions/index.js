//index sets up our Express API

import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { getAllFigures, createNewFigure } from "./src/figures.js"

const app = express()//running express which creates api called app
app.use(cors())
app.use(express.json())

app.get("/figures", getAllFigures) // get request to /figures, sends req,res to getAllFigures function
app.post("/figures", createNewFigure)//post request to /figures in the API, that sends req/res to createNewFigure function

export const api = functions.https.onRequest(app)



