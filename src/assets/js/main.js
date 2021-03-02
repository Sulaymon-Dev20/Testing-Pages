(function () {
	function dropDown(iteam, iteam2) {
		const trigger = document.querySelector(iteam),
		      hideElem = document.querySelector(iteam2);

		trigger.addEventListener('click', () => {
			if(hideElem.classList.contains('open')){
					hideElem.classList.remove('open');
				setTimeout(() => {
					hideElem.style.display = 'none'
				}, 400)
			}else{
				hideElem.style.display = 'block'
				setTimeout(() => {
					hideElem.classList.add('open');
				}, 50)
			}
		})
	}

	dropDown('.mybus__dropdown p', '.hide__block')
})();