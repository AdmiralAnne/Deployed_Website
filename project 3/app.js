<<<<<<< HEAD
const circle = document.querySelector('#circle')

circle.addEventListener('mouseenter', () =>{
    if(!circle.classList.contains('hover')){
        circle.classList.add('hover');
    }
});

circle.addEventListener('mouseleave', () =>{
    if(circle.classList.contains('hover')){
        circle.classList.remove('hover');
    }
=======
const circle = document.querySelector('#circle')

circle.addEventListener('mouseenter', () =>{
    if(!circle.classList.contains('hover')){
        circle.classList.add('hover');
    }
});

circle.addEventListener('mouseleave', () =>{
    if(circle.classList.contains('hover')){
        circle.classList.remove('hover');
    }
>>>>>>> 0bde94d6b236f9f14c44869b77e6572b14161ea1
});