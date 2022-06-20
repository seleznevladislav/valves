import express from 'express'
import path from 'path'

const PORT = process.env.PORT || 3000

const app = express()
const __dirname = path.resolve(path.dirname(''));
app.use(express.static(path.resolve(__dirname, 'frontend')))


app.get('/', (req,res)=>{
	res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'))
})
app.get('/products', (req,res)=>{
	res.sendFile(path.resolve(__dirname, 'frontend', 'products.html'))
})
app.get('/form', (req,res)=>{
	res.sendFile(path.resolve(__dirname, 'frontend', 'form.html'))
})
app.get('/item', (req,res)=>{
	res.sendFile(path.resolve(__dirname, 'frontend', 'item.html'))
})

app.listen(PORT, () => {
	console.log(`Server started at PORT ${PORT}`)
})