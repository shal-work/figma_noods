import $ from '../core';

$.prototype.accordion = function(headActive = 'accordion-head--active', contentActive = 'accordion__content--active', paddings = 40) {

    // Структура аккодреона изменилась из-за написания по БЭМ (h2 + button)
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            $(this[i]).toggleClass(headActive);
            $(this[i]).closest('.accordion').find('.accordion__content').toggleClass(contentActive); //обратимся к родителю по имени .accordion и потом у него найдем контенкт .questions__content и токлим в нем класс
            let content = $(this[i]).closest('.accordion').find('.accordion__content')[0];
            if (this[i].classList.contains(headActive)) {
                content.style.maxHeight = content.scrollHeight + paddings + "px";
                // можно так
                // const atom = document.querySelectorAll('.accordion__content');
                // atom[0].style.maxHeight = atom[0].scrollHeight + paddings + "px";
            } else {
                content.style.maxHeight = "0px";
            }
        });
    }

};



$('.questions__faq .accordion__btn').accordion();
