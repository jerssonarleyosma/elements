//capturar contenedores
let nabvarOneBoton = document.getElementsByClassName('main__container-nav1'); //borrAR
let nabvartwoBoton = document.getElementsByClassName('main__container-nav2'); //borrAR
let mainn = document.getElementsByClassName('main')

let arraySections = Array.from(mainn[0].children);

//capturar modal
let modal = document.getElementsByClassName('pop');

// capturar boy
let elBody = document.getElementById('body');

// funcion para mostrar botones

const showButtoms = (container, arr, divPop) => {
    let elementContainer = document.createElement('div');
    elementContainer.classList.add('main__container-nav-botton')
    if(arr.html) {
        elementContainer.innerHTML += `<button>HTML</button>`;
    }
    if(arr.css) {
        elementContainer.innerHTML += `<button>CSS</button>`;
    }
    if (arr.sass) {
        elementContainer.innerHTML += `<button>SASS</button>`;
    }
    if (arr.js) {
        elementContainer.innerHTML += `<button>JS</button>`;
    }
    container.appendChild(elementContainer);

    
    // volver array a los botones
    let arrayButtoms = Array.from(elementContainer.children);
 
    arrayButtoms.forEach((element, index, arra) => {
        element.addEventListener('click', ()=> {
            
            divPop[0].innerHTML = ``;

            let nombreArrayy = String(element.textContent.toLowerCase());
            
            let preEtiqueta = document.createElement('pre');
            let codeEtiqueta = document.createElement('code');
            let crossMarkContainer = document.createElement('div')
            let crossMark = document.createElement('i');
            crossMark.classList.add('fa-solid', 'fa-circle-xmark');
            
            crossMarkContainer.appendChild(crossMark);
            codeEtiqueta.innerHTML = `${arr[nombreArrayy]}`;

            preEtiqueta.appendChild(codeEtiqueta);
            
            divPop[0].appendChild(preEtiqueta)
            divPop[0].appendChild(crossMarkContainer)

            divPop[0].classList.remove('hidden')
            elBody.classList.add('no-scroll')

            crossMark.addEventListener('click', () => {
                divPop[0].classList.add('hidden')
                elBody.classList.remove('no-scroll')
            })
            
            document.addEventListener('keydown', function(event) {
                // Verifica si la tecla presionada es Escape y si el modal está visible
                if (event.key === "Escape") {
                    divPop[0].classList.add('hidden')
                    elBody.classList.remove('no-scroll')
                }
              });
              
        })
    })
}
