import { Router } from "express"
import path from "path"
import Controller from "../controller/controller.js"
import service from '../service/service.js'
import supabase from "../configs/dbConfig.js"
import filter from '../middlewares/file.js'

const __dirname = path.resolve(path.dirname(''))
const router = Router()

router.post("/add", Controller.addItem)
router.get('/add', Controller.getItems)
// router.post('/photo', filter.uploadPhoto, Controller.addItem)
router.post('/photo', filter.uploadPhoto, Controller.addItem)


export default router
