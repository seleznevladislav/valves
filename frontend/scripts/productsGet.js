	document.addEventListener("DOMContentLoaded", async ()=> {
		let data = await fetch('/add', {method: "GET"})
		let content = await data.json()
		console.log(content)
	});	


	async function request(url , method='GET', data=null) {
		try {
			const headers={};
			let body;
			
			if (data){
				headers['Content-Type'] = 'application/json';
				body = JSON.stringify(data);
			}
			console.log('req:', body);
			const response = await fetch(url, {
				method,
				headers,
				body
			})
			return await response;
		} catch(e) {
			console.warn(`Erorr: ${e.message}`);
		}
	}