import { db } from "./connectDb.js"

export async function createNewFigure (req,res) {
    const newFigure = req.body// the body of the request has the new data
    await db.collection("figures").add(newFigure)
    getAllFigures(req,res)//invoking the function, sends back all figures
}

export async function getAllFigures (req, res) {
    const allFigures = await db.collection("figures").get()
    const redoFigures = allFigures.docs
    .map(doc => ({id:doc.id, ...doc.data()}))
    res.send(redoFigures)//sends back redone figures
}