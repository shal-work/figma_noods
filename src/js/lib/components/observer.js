const options = {
	rootMargin: '-10px'
};
// Создать наблюдателя
const observer = new IntersectionObserver(entries => {
	// перебор записей
	entries.forEach(entry => {
		// console.log(entry.target.classList);
		let containerInner = entry.target.querySelectorAll('[data-animated]');
		if (entry.isIntersecting ) {
			containerInner.forEach(function(item) {
				// console.log(item);
				let setaDataAimated = item.dataset.animated;
				// console.log(setaDataAimated);
				item.classList.add('animated');
				item.classList.add(setaDataAimated);
			})
			return; // если класс добавлен, продолжать уже не надо
		}
		containerInner.forEach(function(item) {
			let setaDataAimated = item.dataset.animated;
			item.classList.remove('animated');
			item.classList.remove(setaDataAimated);
		});
	});
}, options);

// Сообщить наблюдателю, какие элементы следует отслеживать
try {
	observer.observe(document.querySelector('.container-our-bread-collection'));
	observer.observe(document.querySelector('.container-wholesale__container'));
} catch (error) {}
try {
	observer.observe(document.querySelector('#baking'));
	observer.observe(document.querySelector('#baking-img'));

} catch (error) {}
try {
	observer.observe(document.querySelector('#contact-page'));
} catch (error) {}


// Пример записи:
// в html: 
// <div class="container-wholesale__container" id="craft">
// 		<div class="container-inner" data-animated = "fadeInUp">
//</div>
// в js:
//observer.observe(document.querySelector('.container-wholesale__container'));
// или
//observer.observe(document.getElementById('craft'));
//observer.observe(document.querySelector('#craft'));