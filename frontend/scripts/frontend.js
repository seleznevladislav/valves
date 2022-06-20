function animationMain() {
	const bar = document.querySelectorAll('.bar')	
	const radio = document.querySelectorAll('input')
	const arr = Array.from(radio)
	bar[0].style.opacity = 1
	bar[0].style.fontSize = '1.1em'
	let i = 0
	let memory
	for (i; i < arr.length; i++) {
		(function(index) {
			arr[index].addEventListener("click", function() {
				bar[0].style.opacity = ''
				bar[0].style.fontSize = ''
					if (memory != undefined) {
						bar[memory].style.opacity = ''
						bar[memory].style.fontSize = ''
					}
					bar[index].style.opacity = 1
					bar[index].style.fontSize = '1.1em'
					memory = index
			 })
 	})(i);
	}
}
animationMain()
