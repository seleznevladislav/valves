import Service from '../service/service.js';
const addItem = async (req, res, next) => {
	const Item = {
		name: req.body.name,
		description: req.body.description,
		figure: req.body.figure,
	};
	const Photo = {
		name: req.file.originalname,
		SRC: req.file.path,
		size: req.file.size,
	}
	try {
			const dataItem = await Service.addItem(Item)
			const dataPhoto = await Service.addPhoto(Photo);
			res.send(`<h1>Данные успешно отправлены</h1><a href='/products.html'>Вернуться на страницу с продуктами</a>`);
			next();
	} catch(e) {
			console.error(e);
			res.sendStatus(500);
	}
}

const getItems = async (req, res, next) => {
	try {
			const data = await Service.getItems()
			// const photos = await Service.getPhotos()
			res.send(data)
			// res.send(photos)

			next();
	} catch(e) {
			console.error(e);
			res.sendStatus(500);
	}
}

const getEx = async (req, res, next) => {
	try {
		const data = await Service.getItem(req.body.id)
		res.send(data)
	} catch(e) {
			console.error(e);
			res.sendStatus(500);
	}
}
const getSearch = async (req, res, next) => {
	const information = req.body
	if (('type' in information) && ('name' in information)) {
		try {
			const data = await Service.getSearchNT(req.body)
			res.send(data)
		} catch(e) {
				console.error(e);
				res.sendStatus(500);
		}
	} else if ('type' in information) {
		try {
			const data = await Service.getSearchT(req.body.type)
			res.send(data)
		} catch(e) {
				console.error(e);
				res.sendStatus(500);
		}
	} else if ('name' in information) {
		try {
			const data = await Service.getSearchN(req.body.name)
			res.send(data)
		} catch(e) {
				console.error(e);
				res.sendStatus(500);
		}
	}
}

export default {
	addItem,
	getItems, 
	getEx,
	getSearch
}
