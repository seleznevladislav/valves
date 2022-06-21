import { Router } from "express";
import path from "path";
import Controller from "../controller/controller.js";
import service from '../service/service.js'
import supabase from "../configs/dbConfig.js"

const __dirname = path.resolve(path.dirname(''));
const router = Router();

router.post("/add", (req, res) => {
	Controller.addItem
});
router.get('/add', async (req, res) => {
	let { data: Item, error } = await supabase
  .from('Item')
  .select()
	.match('{1}')
	res.send(Item)
})
export default router