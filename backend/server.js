import express from "express";
import initialize from "./app.js";
const app = express()
const port = 3000


initialize(app);

app.listen(port, () => {
  console.log(`The TO-DO App on port ${port}`)
})