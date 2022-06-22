const swup = new Swup({});

function init() {

	const bar = document.querySelectorAll('.bar')	
	const radio = document.querySelectorAll('input')
	const title = document.querySelector('.h1')
	const numbers = document.querySelector('.n1') 

	const arr = Array.from(radio)
	let i = 0
	let memory
	for (i; i < arr.length; i++) {
		(function(index) {
			arr[index].addEventListener("click", function() {
	
					if (memory != undefined) {
						console.log('dede')

					}
					if (index == 0) title.style.marginTop = '0'
					if (index == 0) numbers.style.marginTop = '0'
					if (index == 1) title.style.marginTop = '-160px'
					if (index == 1) numbers.style.marginTop = '-30px'
					if (index == 2) title.style.marginTop = '-320px'
					if (index == 2) numbers.style.marginTop = '-60px'
					if (index == 3) title.style.marginTop = '-480px'
					if (index == 3) numbers.style.marginTop = '-90px'
					memory = index
			 })
 	})(i);
	}
}
init()

swup.on('contentReplaced', init)
