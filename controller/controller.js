import Service from '../service/service.js';

const addItem = async (req, res, next) => {
	console.log(req.body.name)
	const Item = {
		id: 14,
		name: req.body.name,
		description: req.body.description,
		figure: req.body.figure,
	};
	console.log(req.file)
	const Photo = {
		name: req.file.originalname,
		SRC: req.file.path,
		size: req.file.size,
	}
	try {
			console.log('working')
			const dataItem = await Service.addItem(Item);
			Photo.id = Item.id
			const dataPhoto = await Service.addPhoto(Photo);
			res.send(dataItem);
			next();
	} catch(e) {
			console.error(e);
			res.sendStatus(500);
	}
}

const getItems = async (req, res, next) => {
	try {
			const data = await Service.getItems();
			res.send(data);
			next();
	} catch(e) {
			console.error(e);
			res.sendStatus(500);
	}
}

export default {
	addItem,
	getItems
}
