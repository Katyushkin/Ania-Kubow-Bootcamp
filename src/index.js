//move Bob exercise

//use HTML document and select face class
const Bob = document.querySelector('.pupil')

function movePupils() {
    Bob.style.margin = '10px 20px 10px 0px';
}

function movePupilsBack() {
    Bob.style.margin = '10px 0px 10px 20px';
}

//when we click on Bob our function is executed
Bob.addEventListener('mouseenter', movePupils)
Bob.addEventListener('mouseleave', movePupilsBack)


