import $ from '../core';

$.prototype.dropdown = function() {
    for (let i = 0; i < this.length; i++) {
        const trigger = this[i].getAttribute('data-toggle-trigger'); //вариант урока
        // const id = this[i].getAttribute('id').replace(/(-?(\D+\.\D+)|(\D+))/, ''); //("drop:26.2_d5").replace выдает 26.2_d5

        $(this[i]).click(() => {
            $(`[data-toggle="${trigger}"]`).fadeToggle(800);
        });
    }
};
