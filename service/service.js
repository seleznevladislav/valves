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

const getModel = async () => {
	try {
			const {data, error} = await supabase
					.from('models')
					.select('*');
					
			if (error) throw error
			return data
	} catch (e) {
			throw e
	}
}


export default {
	addItem,
	getModel
}