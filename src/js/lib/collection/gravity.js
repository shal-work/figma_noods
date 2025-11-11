const gravity = (gravitySelector, gravityElement) => {

    const gravity = document.querySelector(gravitySelector),
          element = document.querySelector(gravityElement);


    //оптимизация will-change
    //'mouseenter' - генерируется когда указатель появляется над элементом 
    gravity.addEventListener('mouseenter' , e => {
        gravity.style.willChange  = '-webkit-transform';
        gravity.style.willChange  = 'transform';

    });
    element.addEventListener('mouseenter' , e => {
        element.style.willChange  = '-webkit-transform, color';
        element.style.willChange  = 'transform, color';
    });
    //'mouseleave' - событие  происходит, когда курсор покидает элемент. Переходы внутри элемента, на его потомки и с них, не считаются
    gravity.addEventListener('mouseleave' , e => {
        gravity.style.willChange  = 'auto';
    });
    element.addEventListener('mouseleave' , e => {
        element.style.willChange  = 'auto';
    });
    //end-----оптимизация will-change


    gravity.addEventListener('mousemove', e => {

        let layerX = e.clientX - gravity.getBoundingClientRect().left -  gravity.getBoundingClientRect().width/2;
        let layerY = e.clientY - gravity.getBoundingClientRect().top  - gravity.getBoundingClientRect().height/2;


        let step = 3;
        gravity.style.WebkitTransform = 'translate(' + layerX / step + 'px ,' + layerY / step + 'px)';
        gravity.style.transform = 'translate(' + layerX / step + 'px ,' + layerY / step + 'px)';


        console.log("transform = " ,  gravity.style.transform);
    });
    gravity.addEventListener('mouseleave', e => {
        // gravity.style.WebkitTransform = 'translate(0px , 0px)';
        // debugger
        gravity.style.transform = 'translate(0px , 0px)';
    });
};

export default gravity;