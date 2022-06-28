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
								<li>19 — тип арматуры — затвор обратный</li>
								<li>c — материал корпуса — углеродистая сталь</li>
								<li>53 — номер модели</li>
								<li>нж — материал уплотнения — нержавеющая сталь</li>
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
								<li>Температура рабочей среды: от -40 до + 425°С;</li>
								<li>Температура окружающей среды: от -40 до +50°С;</li>
								<li>Рабочая среда: вода, пар, природный газ, жидкие нефтепродукты;</li>
							</ul>
							<ul>
								<li>Климатическое исполнение и категория размещения по ГОСТ 15150-69;</li>
								<li>Направление потока среды: под захлопку;</li>
							</ul>
						</div>
						<div class="information__open" tabindex="2">
							<p>Технические данные</p>
							<img src="../img/arrow-down.svg" alt="arrow down">
						</div>
						<div class="open">
							<ul>
								<li>Привод: автоматический;</li>
								<li>Номинальное давление PN, МПа (кгс/см²): 4,0 (40);</li>
								<li>Присоединение к трубопроводу: фланцевое по ГОСТ 12815-80;</li>
								<li>Таблица-фигура: 19с53нж;</li>
							</ul>
							<ul>
								<li>Установочное положение на трубопроводе: на горизонтальном трубопроводе – крышкой вверх, на
									вертикальном –
									по направлению стрелки на корпусе;</li>
								<li>Регламентирующий документ: ТУ 3742-018-0218118-2002, ТУ 3742-003-07533604-94;</li>
							</ul>
						</div>
						<div class="information__open" tabindex="3">
							<p>Материалы основных деталей</p>
							<img src="../img/arrow-down.svg" alt="arrow down">
						</div>
						<div class="open">
							<ul>
								<li>Материал изделия (корпус, крышка): сталь 25Л;</li>
								<li>Материал изделия (детали затвора, захлопка): сталь 20х13;</li>
								<li>Материал изделия(ось): сталь 20Х13;</li>
							</ul>
							<ul>
								<li>Материал изделия (серьга, кронштейн): сталь 20;</li>
								<li>Материал изделия (прокладка): паронит ПА или ПОН-Б;</li>
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