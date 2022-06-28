	document.addEventListener("DOMContentLoaded", ()=> {
		fetch('/add', {method: "GET"})
		.then((data)=>data.json())
		.then((data)=> getItems(data))
	});	


	function getItems(items) {
		const itemArray = document.querySelector('.collection')
		
		itemArray.innerHTML = ''

		items.forEach((item) => {
			const itemBlock = document.createElement('div');

			itemBlock.classList.add('item');
		
			itemBlock.innerHTML = `
			<a href="/item/${item.id}">
				<div>
					<img src="./img/${item.Photo[0].name}" alt="" style="--i:$100ms">
				</div>
				<div><p class="item_name" style="--ip:700ms">${item.name} ${item.figure}</p></div>
			</a>

			`;

			itemArray.append(itemBlock);
			console.log(item);
		})
	}


	// async function request(url , method='GET', data=null) {
	// 	try {
	// 		const headers={};
	// 		let body;
			
	// 		if (data){
	// 			headers['Content-Type'] = 'application/json';
	// 			body = JSON.stringify(data);
	// 		}
	// 		console.log('req:', body);
	// 		const response = await fetch(url, {
	// 			method,
	// 			headers,
	// 			body
	// 		})
	// 		return await response;
	// 	} catch(e) {
	// 		console.warn(`Erorr: ${e.message}`);
	// 	}
	// }