
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
    
    // agregar evento click a esos botones
    arrayButtoms.forEach((element, index, arra) => {
        element.addEventListener('click', ()=> {

            divPop[0].innerHTML = ``;

            //cada boton tiene un nombre se pasa a minuscula y se captura ejemplo html css js etc.
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

            // este evento es cuando se hace click en el modal pero no en el codigo  para cerrar (performance)
            divPop[0].addEventListener('click', function(event) {
                if(event.target.tagName == "DIV") {
                    divPop[0].classList.add('hidden')
                    elBody.classList.remove('no-scroll')
                } 
            });
            
            
              
        })
    })
}
