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
	getPhotos
}