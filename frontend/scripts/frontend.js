const bar = document.querySelectorAll('.bar')	
const radio = document.querySelectorAll('input')
const title = document.querySelector('.h1')
const numbers = document.querySelector('.n1') 
function animationMain() {
	const arr = Array.from(radio)
	let i = 0
	let memory
	for (i; i < arr.length; i++) {
		(function(index) {
			arr[index].addEventListener("click", function() {
				bar[0].style.opacity = .6
				bar[0].style.fontSize = '1em'
				console.log(numbers)
					if (memory != undefined) {
						console.log('dede')
						bar[memory].style.opacity = ''
						bar[memory].style.fontSize = ''
					}
					if (index == 0) title.style.marginTop = '0'
					if (index == 0) numbers.style.marginTop = '0'
					if (index == 1) title.style.marginTop = '-160px'
					if (index == 1) numbers.style.marginTop = '-30px'
					if (index == 2) title.style.marginTop = '-320px'
					if (index == 2) numbers.style.marginTop = '-60px'
					if (index == 3) title.style.marginTop = '-480px'
					if (index == 3) numbers.style.marginTop = '-90px'
					bar[index].style.opacity = 1
					bar[index].style.fontSize = '1.1em'
					memory = index
			 })
 	})(i);
	}
}
animationMain()

