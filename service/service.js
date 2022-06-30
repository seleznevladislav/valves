import supabase from "../configs/dbConfig.js"

const addItem = async item => {
	try {
			const {data, error} = await supabase
					.from('Item')
					.insert(item)

			if (error) throw error
			return data
	} catch (e) {
			throw e
	}
}

const addPhoto = async photo => {
	try {
			const {data, error} = await supabase
					.from('Photo')
					.insert(photo)

			if (error) throw error
			return data
	} catch (e) {
			throw e
	}
}

const getItems = async () => {
	try {
			const {data, error} = await supabase
					.from('Item')
					.select('id, name, Photo (SRC, name), figure, description')

				
			if (error) throw error
			return data
	} catch (e) {
			throw e
	}
}
const getItem = async (id) => {
	try {
			const {data, error} = await supabase
					.from('Item')
					.select(`id, name, Photo (SRC, name), figure, description, type,
					Figure (figure_number, figure_id, 
					Figure_Material (
					Materials (name_S, name_F))),
					Exploitation (*),
					Specifications (*),
					Item_Details (
					Details ( datail_name, 
					Materials (name_F)))`
					)
					.match({id})

				
			if (error) throw error
			return data
	} catch (e) {
			throw e
	}
}
const getSearchN = async (figure) => {
	try {
			const {data, error} = await supabase
			.from('Item')
			.select('id, name, Photo (SRC, name), figure')
			.match({figure})
				
			if (error) throw error
			return data
	} catch (e) {
			throw e
	}
}
const getSearchT = async (name) => {
	try {
			const {data, error} = await supabase
			.from('Item')
			.select('id, name, Photo (SRC, name), figure')
			.match({name})
				
			if (error) throw error
			return data
	} catch (e) {
			throw e
	}
}
const getSearchNT = async (info) => {
	try {
			const name = info.type
			const figure = info.name
			const {data, error} = await supabase
			.from('Item')
			.select('id, name, Photo (SRC, name), figure')
			.eq('name', name)
			.eq('figure', figure)
				
			if (error) throw error
			return data
	} catch (e) {
			throw e
	}
}
const getPhotos = async () => {
	try {
			const {data, error} = await supabase
					.from('Photo')
					.select('*');
					
			if (error) throw error
			return data
	} catch (e) {
			throw e
	}
}


export default {
	addItem,
	getItems, 
	addPhoto,
	getPhotos,
	getItem,
	getSearchN,
	getSearchT,
	getSearchNT,
}