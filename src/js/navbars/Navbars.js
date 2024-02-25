//capturar contenedores
let nabvarOneBoton = document.getElementsByClassName('main__container-nav1'); 
let nabvartwoBoton = document.getElementsByClassName('main__container-nav2'); 
let mainn = document.getElementsByClassName('main')

// capturar contenedores de los navbars
let arraySections = Array.from(mainn[0].children);

//capturar modal
let modal = document.getElementsByClassName('pop');

// capturar body
let elBody = document.getElementById('body');


////////////segunda nav

let ulContainer = document.getElementById('items2');
let gear = document.getElementById('gear');

let elementsUlContainer =  Array.from(ulContainer.children);


elementsUlContainer.forEach((element, index, arr) => {
    element.addEventListener('click', (e) => {
        let targetElement = e.target; 
        arr.forEach(eleme => {
            eleme.children[0].classList.remove('clicked2')
        }) 
        if(targetElement == element.children[0]){
            targetElement.classList.add('clicked2');
            buscarCentros(targetElement, gear);
        }
    })
}) 

function toggleClases(cliped, num) {
    if (num == 1) {
        cliped.classList.remove('cliped');
        cliped.classList.remove('cliped-lefts');
        cliped.classList.remove('cliped-rigths')
        cliped.classList.add('cliped-rigthf');
        setTimeout(() => {
            cliped.classList.remove('cliped-rigthf');
            cliped.classList.add('cliped-rigths')
        }, 700); 
        
    } else if (num == 2) {
        cliped.classList.remove('cliped');
        cliped.classList.remove('cliped-lefts');
        cliped.classList.remove('cliped-rigths')
        cliped.classList.add('cliped-leftf');
        setTimeout(() => {
            cliped.classList.remove('cliped-leftf');
            cliped.classList.add('cliped-lefts')
        }, 700); 


    }
}



let buscarCentros = (element, cliped) => {
    let datosHtml = element.getBoundingClientRect();
    let datosCliped = cliped.getBoundingClientRect();


    let centroXHtml = datosHtml.x + datosHtml.width / 2;
    let centroYHtml = datosHtml.y + datosHtml.height / 2;
    
    
    let centroXCliped = datosCliped.x + datosCliped.width / 2;
    let centroYCliped = datosCliped.y + datosCliped.height / 2;
    
    
    //diferencias
    let diferenciaX = centroXHtml - centroXCliped;
    let diferenciaY = centroYHtml - centroYCliped;

    let pocisionAnterior = `${Number(cliped.style.left.split('px')[0])}`;

    
    cliped.style.left = `${Number(cliped.style.left.split('px')[0]) + diferenciaX}px`;
    cliped.style.top = `${Number(cliped.style.top.split('px')[0]) + diferenciaY}px`;

    let pocisionPosterior = Number(`${Number(cliped.style.left.split('px')[0])}`);


    if(Number(pocisionAnterior) <= Number(pocisionPosterior)) {

        toggleClases(cliped, 1);

    } else {

        toggleClases(cliped, 2);

    }

    
}

window.onload = function() {
    elementsUlContainer[0].children[0].click();
};


// ejecutar funciones 

showButtoms(arraySections[0], arrNavOne, modal)
showButtoms(arraySections[1], arrNavTwo, modal)