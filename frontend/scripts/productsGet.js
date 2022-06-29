	const searchBtn = document.querySelector('#search')

	document.addEventListener("DOMContentLoaded", () => {
		fetch('/add', {
				method: "GET"
			})
			.then((data) => data.json())
			.then((data) => getItems(data))
	});

	searchBtn.addEventListener('click', search)

	async function search(e) {
		e.preventDefault()
		const inputName = document.querySelector('#input')
		const inputType = document.querySelector('#type')

		const jsonReq = {}
		if (inputName.value) jsonReq.name = inputName.value
		if (inputType.value != 'null') jsonReq.type = `Клапан ${inputType.value}`

		
		if (("name" in jsonReq) || ("type" in jsonReq)) {
			const response = await request('/products', 'POST', jsonReq)
			let newInfo = await response.json()
			getItems(newInfo)
		}
	}


	function getItems(items) {
		const itemArray = document.querySelector('.collection')

		if (items[0] == undefined) {
			console.log('пусто')
		}

		itemArray.innerHTML = ''

		items.forEach((item) => {
			const itemBlock = document.createElement('div');

			itemBlock.classList.add('item');

			itemBlock.innerHTML = `
			<a href="/item/${item.id}">
				<div>
					<img src="./img/${item.Photo[0].name}" alt="" style="--i:$100ms">
				</div>
				<div><p class="item_name" style="--ip:700ms;">${item.name} ${item.figure}</p></div>
			</a>

			`;

			itemArray.append(itemBlock);
			// console.log(item);
		})
	}


	async function request(url, method = 'GET', data = null) {
		try {
			const headers = {};
			let body;

			if (data) {
				headers['Content-Type'] = 'application/json';
				body = JSON.stringify(data);
			}
			// console.log('req:', body);
			const response = await fetch(url, {
				method,
				headers,
				body
			})
			return await response;
		} catch (e) {
			console.warn(`Erorr: ${e.message}`);
		}
	}