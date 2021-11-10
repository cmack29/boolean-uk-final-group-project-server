require("dotenv").config()

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const app = express()


/* SETUP MIDDLEWARE */

app.disable("x-powered-by")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

const classesRouter = require("./resources/classes/router");
const memeberRouter = require("./resources/members/router")
const trainerRouter = require("./resources/trainers/router")

/* SETUP ROUTES */
app.use("/classes", classesRouter);
app.use("/members", memeberRouter);
app.use("/trainers", trainerRouter);

app.get("*", (req, res) => {
    res.json({ ok: true })
})

/* START SERVER */

const port = process.env.PORT || 3030

app.listen(port, () => {
    console.log(`\n🚀 Server is running on http://localhost:${port}/\n`)
})