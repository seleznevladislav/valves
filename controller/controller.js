import Service from '../service/service.js';

const addItem = async (req, res, next) => {
	const Item = {
			id: 1,
			name: req.body.name,
			description: req.body.description,
	};

	try {
			console.log('working')
			const data = await Service.addItem(Item);
			res.send(data);
			next();
	} catch(e) {
			console.error(e);
			res.sendStatus(500);
	}
}

export default addItem