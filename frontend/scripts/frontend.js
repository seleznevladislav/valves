const swup = new Swup({});

function init() {

	const bar = document.querySelectorAll('.bar')	
	const radio = document.querySelectorAll('input')
	const title = document.querySelector('.h1')
	const numbers = document.querySelector('.n1') 

	let y = 0
	let i = 0
	let t = 0
	let n = 0
	let flap = 0
	const arr = Array.from(radio)
	window.addEventListener('wheel', (e) => {
		y = y + e.deltaY

		if ( y > 0) {
			if (t > -480 && n > -90) {
				t = t - 160
				n = n - 30
				flap++
			}
			title.style.marginTop = `${t}px`
			numbers.style.marginTop = `${n}px`
			arr[flap].checked = true
			bar[flap].classList.add('active')
			bar[flap - 1].classList.remove('active')
		}
		if ( y < 0 && y != 0) {
			if (t < 0 && n < 0) {
				t = t + 160
				n = n + 30
				flap--
			}
			title.style.marginTop = `${t}px`
			numbers.style.marginTop = `${n}px`
			arr[flap].checked = true
			bar[flap].classList.add('active')
			bar[flap + 1].classList.remove('active')
		}
		setInterval (() => { y = 0 }, 1500)
	})	

	let memory
	for (i; i < arr.length; i++) {
		(function(index) {
			arr[index].addEventListener("click", function() {
					if (memory != undefined) {
						console.log('dede')

					}
					if (index == 0) {
						title.style.marginTop = '0'
						numbers.style.marginTop = '0'
						t = 0 
						n = 0
						flap = 0
					}
					if (index == 1) {
						title.style.marginTop = '-160px'
						numbers.style.marginTop = '-30px'
						t = -160 
						n = -30
						flap = 1
					}
					if (index == 2) {
						title.style.marginTop = '-320px'
						numbers.style.marginTop = '-60px'
						t = -320 
						n = -60
						flap = 2
					}
					if (index == 3) {
						title.style.marginTop = '-480px'
						numbers.style.marginTop = '-90px'
						t = -480 
						n = -90
						flap = 3
					}
					memory = index
			 })
 	})(i);
	}
}
init()

swup.on('contentReplaced', init)
