const body = document.querySelector('.body');
const span = document.querySelector('span');
const btn = document.querySelector('.btn-hero');


// function change() {
//     let colors = ['red', 'green', 'blue', 'yellow', 'orange', 'brown'];
//     body.style.backgroundColor = colors[Math.floor(Math.random()* colors.length)]
// }

function change(){
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 255));
    } 
    body.style.backgroundColor = 'rgb(' + color.join(',') + ')';
    span.textContent =  body.style.backgroundColor;
    
}


btn.addEventListener('click', change);