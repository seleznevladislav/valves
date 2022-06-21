import express from 'express'
import path from 'path'
import Router from "./router/router.js"
import 'dotenv/config'

const PORT = process.env.PORT || 3000

const app = express()
const __dirname = path.resolve(path.dirname(''));
app.use(express.static(path.resolve(__dirname, 'frontend')))
app.use("/model", Router);


app.listen(PORT, () => {
	console.log(`Server started at PORT ${PORT}`)
})