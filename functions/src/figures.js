import { db } from "./connectDb.js"

export async function createNewFigure (req,res) {
    const newFigure = req.body
    await db.collection("figures").add(newFigure)
    res.status(201).send({message: "figure added."})
}

export async function getAllFigures (req, res) {
    const allFigures = await db.collection("figures").get()
    const redoFigures = allFigures.docs
    .map(doc => ({id:doc.id, ...doc.data()}))
    res.send(redoFigures)
}