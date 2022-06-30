document.addEventListener('DOMContentLoaded', async () => {
	
	let index = document.URL.substring(document.URL.lastIndexOf('/') + 1)
	const body={id: index};
	let data = await request(`/item/${index}`, 'POST', body)
	let info = await data.json()
	let str = info[0].Photo[0].name
	let indexDt = str.indexOf(".")
	info[0].Photo[0].name = str.slice(0, indexDt)
	console.log(info[0].Photo[0].name)
	createItem(info[0])
})

function createItem(info){
	console.log(info.Item_Details[1].Details.Materials.name_F)
	const section = document.querySelector('.information')
	section.innerHTML = `
				<div class="item">
					<div class="item__information">
						<div>
							<h2>${info.name}</h2>
						</div>
						<div class="item__information_description">
							<span class="name">${info.figure}</span>
							<p id="visible">${info.description}
							</p>
							<ul id="hidden">
								<li>${info.Figure[0].figure_id ? info.Figure[0].figure_id: "" } — тип арматуры — ${info.type}</li>
								<li>${info.Figure[0].Figure_Material[0].Materials.name_S ? info.Figure[0].Figure_Material[1].Materials.name_S : ''} 
								— материал корпуса — ${info.Figure[0].Figure_Material[0].Materials.name_F ? info.Figure[0].Figure_Material[0].Materials.name_F : ''}</li>
								<li>${info.Figure[0].figure_number ? info.Figure[0].figure_number : ""} — номер модели</li>
								<li>${info.Figure[0].Figure_Material[1].Materials.name_S ? info.Figure[0].Figure_Material[1].Materials.name_S : ''} 
								— материал уплотнения — ${info.Figure[0].Figure_Material[1].Materials.name_F ? info.Figure[0].Figure_Material[1].Materials.name_F : ""}</li>
							</ul>
						</div>
					</div>
					<div class="information__full">
						<div class="information__open" tabindex="1">
							<p>Условия эксплуатации</p>
							<img src="../img/arrow-down.svg" alt="arrow down">
						</div>
						<div class="open">
							<ul>
								<li>Температура рабочей среды: от ${info.Exploitation[0].temp_w_min} до + ${info.Exploitation[0].temp_w_max}°С;</li>
								<li>Температура окружающей среды: от ${info.Exploitation[0].temp_e_min} до +${info.Exploitation[0].temp_e_max}°С;</li>
								<li>Рабочая среда: ${info.Exploitation[0].environment ? info.Exploitation[0].environment : "пусто" };</li>
							</ul>
							<ul>
								<li>Климатическое исполнение и категория размещения по ГОСТ 15150-69;</li>
								<li>Направление потока среды: ${info.Exploitation[0].direction};</li>
							</ul>
						</div>
						<div class="information__open" tabindex="2">
							<p>Технические данные</p>
							<img src="../img/arrow-down.svg" alt="arrow down">
						</div>
						<div class="open">
							<ul>
								<li>Привод: ${info.Specifications[0].drive};</li>
								<li>Номинальное давление PN, МПа (кгс/см²): ${info.Specifications[0].pressure} (${info.Specifications[0].pressure*10});</li>
								<li>Таблица-фигура: ${info.figure};</li>
							</ul>
							<ul>
								<li>Условные диаметры, мм: ${info.Specifications[0].diameters};</li>
								<li>Регламентирующий документ: ${info.Specifications[0].document};</li>
							</ul>
						</div>
						<div class="information__open" tabindex="3">
							<p>Материалы основных деталей</p>
							<img src="../img/arrow-down.svg" alt="arrow down">
						</div>
						<div class="open">
							<ul>
								<li>Материал изделия (${info.Item_Details[0] ? info.Item_Details[0].Details.datail_name : ''}): ${info.Item_Details[0] ? info.Item_Details[0].Details.Materials.name_F : ''};</li>
								<li>Материал изделия (${info.Item_Details[1] ? info.Item_Details[1].Details.datail_name : ''}): ${info.Item_Details[1] ? info.Item_Details[1].Details.Materials.name_F : ''};</li>
								<li>Материал изделия(${info.Item_Details[2]  ? info.Item_Details[2].Details.datail_name : ''}): ${info.Item_Details[2] ? info.Item_Details[2].Details.Materials.name_F : ''};</li>
							</ul>
							<ul>
								<li>Материал изделия (${info.Item_Details[3]  ? info.Item_Details[3].Details.datail_name : ''}): ${info.Item_Details[3]  ? info.Item_Details[3].Details.Materials.name_F : ''};</li>
								<li>Материал изделия (${info.Item_Details[4] ? info.Item_Details[4].Details.datail_name : ''}): ${info.Item_Details[4]  ? info.Item_Details[4].Details.Materials.name_F : ''};</li>
							</ul>
						</div>
						<div class="information__open" tabindex="4">
							<p>Документы</p>
							<img src="../img/arrow-down.svg" alt="arrow down">
						</div>
						<div class="open">
							<a href="../docs/19c53нж.pdf" download="">Паспорт клапана</a>
							<a href="../docs/ГОСТ33423_2015.pdf" download="">ГОСТ 33423-2015</a>
						</div>
					</div>
				</div>
				<div class="item__logo">
					<img src="../img/${info.Photo[0].name}_vertical.jpg" alt="${info.Photo[0].name}">
				</div> 
	`
}




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