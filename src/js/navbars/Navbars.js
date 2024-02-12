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



//funcion para mostrar botones nav 1


const arrNavOne = {
    html: `
    &lt;section class="main__container"&gt;
        &lt;nav class="main__container-nav main__container-nav1"&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#" onclick="event.preventDefault();"&gt;Inicio&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#" onclick="event.preventDefault();"&gt;item a&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#" onclick="event.preventDefault();"&gt;item b&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#" onclick="event.preventDefault();"&gt;item c&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;
    &lt;/section&gt;
    `,
    css: `
        body .main__container {
            background-color: #fbfcf6;
            width: 80%;
            height: 300px;
            margin: 32px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 8px groove rgb(16, 255, 36);
            border-radius: 25px 8px 25px 25px;
        }
        body .main__container-nav ul li {
            list-style: none;
        }
        body .main__container-nav ul li a {
            text-decoration: none;
        }
        
        .main__container-nav1 {
            width: 90%;
            height: 100px;
            background: linear-gradient(180deg, rgb(33, 121, 33), rgb(44, 158, 44));
            border-radius: 15px;
            box-shadow: 2px 3px 4px rgb(0, 0, 0);
        }
        .main__container-nav1 ul {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .main__container-nav1 ul li {
            background-color: rgb(245, 47, 47);
            width: 120px;
            height: 80px;
            border-radius: 10px;
        }
        .main__container-nav1 ul li a {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(180deg, rgb(33, 121, 33), rgb(44, 158, 44));
            color: white;
            font-weight: 200;
            font-size: 2rem;
            border-radius: 10px;
            transition: all ease-in-out 0.2s;
        }
        .main__container-nav1 ul li a:hover {
            cursor: pointer;
            font-weight: 600;
            font-size: 2.4rem;
            border-radius: 25px;
        }

        //media queries
        @media (max-width: 800px) {
            .main__container-nav1 {
                width: 50%;
                height: 250px;
              }
              .main__container-nav1 ul {
                padding: 8px;
                flex-direction: column;
                justify-content: space-around;
              }
              .main__container-nav1 ul li {
                width: 100%;
                height: 45px;
              }
        }
    `,
    sass: `
        .main__container-nav1 {
            width: 90%;
            height: 100px;
            background: linear-gradient(180deg, rgb(33, 121, 33), rgb(44, 158, 44));
            border-radius: 15px;
            box-shadow: 2px 3px 4px rgb(0, 0, 0);
            ul {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                li {
                    background-color: rgb(245, 47, 47);
                    width: 120px;
                    height: 80px;
                    border-radius: 10px;     
                    a {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: linear-gradient(180deg, rgb(33, 121, 33), rgb(44, 158, 44));
                        color: white;
                        font-weight: 200;
                        font-size: 2rem;
                        border-radius: 10px;
                        transition: all ease-in-out 0.2s;
                        &:hover {
                            cursor: pointer;
                            font-weight: 600;
                            font-size: 2.4rem;
                            border-radius: 25px;
                        }
                    }
                }
            }
        }

        //media queries
        @media (max-width: 800px) {
            .main__container-nav1 {
                width: 50%;
                height: 250px;
                ul {
                    padding: 8px;
                    flex-direction: column;
                    justify-content: space-around;
                    li {
                        width: 100%;
                        height: 45px;
                    }
                }
            }
        }
    `,
};

const arrNavTwo = {
    html: `
        &lt;section class="main__container"&gt;
            &lt;svg width="0.1" heigth="0.1"&gt;
                &lt;defs&gt;
                    &lt;clipPath id="figuracliped" clipPathUnits="objectBoundingBox"&gt;
                        &lt;circle cx="0.5" cy="0.5" r="0.35" /&gt;
                        &lt;rect x="0.4" y="0.05" width="0.2" height="0.9" /&gt;
                        &lt;rect x="0.4" y="0.05" width="0.2" height="0.9" transform="rotate(45,0.50,0.50)"/&gt;
                        &lt;rect x="0.4" y="0.05" width="0.2" height="0.9" transform="rotate(90,0.50,0.50)"/&gt;
                        &lt;rect x="0.4" y="0.05" width="0.2" height="0.9" transform="rotate(135,0.50,0.50)"/&gt;
                        &lt;rect x="0.4" y="0.05" width="0.2" height="0.9" transform="rotate(180,0.50,0.50)"/&gt;
                    &lt;/clipPath&gt;
                &lt;/defs&gt;
            &lt;/svg&gt;
            &lt;nav class="main__container-nav main__container-nav2"&gt;
                &lt;div class="cliped" id="gear"&gt;&lt;/div&gt;
                &lt;ul id="items2"&gt;
                    &lt;li&gt;&lt;a href="#" onclick="event.preventDefault();"&gt;Inicio&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="#" onclick="event.preventDefault();"&gt;item a&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="#" onclick="event.preventDefault();"&gt;item b&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="#" onclick="event.preventDefault();"&gt;item c&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/nav&gt;
        &lt;/section&gt;
    `,
    css: `
        .main__container-nav2 {
            width: 75%;
            height: 80px;
            position: relative;
            background: linear-gradient(180deg, rgb(31, 1, 165), rgb(83, 45, 255));
            border-radius: 15px;
            box-shadow: 3px 2px 4px rgb(44, 44, 44);
        }
        .main__container-nav2 .cliped {
            z-index: 1;
            width: 150px;
            height: 150px;
            position: absolute;
            top: 0px;
            left: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(235, 153, 2);
            clip-path: url(#figuracliped);
            transition: all 0.7s ease-in-out;
            animation: clipedd 20s linear 0.02s infinite normal none running;
        }
        @keyframes clipedd {
            from {
            transform: rotate(0deg);
            }
            to {
            transform: rotate(360deg);
            }
        }
        .main__container-nav2 ul {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .main__container-nav2 ul .clicked2 {
            color: rgb(47, 0, 255);
            font-weight: 600;
            font-size: 2.4rem;
        }
        .main__container-nav2 ul li {
            z-index: 2;
            width: 120px;
            height: 80px;
        }
        .main__container-nav2 ul li a {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: 200;
            font-size: 2rem;
            cursor: pointer;
            transition: all ease-in-out 0.2s;
        }
        .main__container-nav2 ul li a:hover {
            font-weight: 600;
            font-size: 2.4rem;
        }
        
        .cliped-rigthf {
            z-index: 1;
            width: 150px;
            height: 150px;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(235, 153, 2);
            clip-path: url(#figuracliped);
            transition: all 0.7s ease-in-out;
            animation: clipeddrigfast 0.7s linear 0.00001s infinite normal forwards running;
        }
        
        @keyframes clipeddrigfast {
            from {
            transform: rotate(0deg);
            }
            to {
            transform: rotate(360deg);
            }
        }
        .cliped-rigths {
            z-index: 1;
            width: 150px;
            height: 150px;
            position: absolute;
            top: 0px;
            left: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(235, 153, 2);
            clip-path: url(#figuracliped);
            transition: all 0.7s ease-in-out;
            animation: clipeddrigslow 20s linear 0.01s infinite normal none running;
        }
        
        @keyframes clipeddrigslow {
            from {
            transform: rotate(0deg);
            }
            to {
            transform: rotate(360deg);
            }
        }
        .cliped-leftf {
            z-index: 1;
            width: 150px;
            height: 150px;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(235, 153, 2);
            clip-path: url(#figuracliped);
            transition: all 0.7s ease-in-out;
            animation: clipeddleffast 0.7s linear 0.00001s infinite normal forwards running;
        }
        
        @keyframes clipeddleffast {
            from {
            transform: rotate(0deg);
            }
            to {
            transform: rotate(-360deg);
            }
        }
        .cliped-lefts {
            z-index: 1;
            width: 150px;
            height: 150px;
            position: absolute;
            top: 0px;
            left: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(235, 153, 2);
            clip-path: url(#figuracliped);
            transition: all 0.7s ease-in-out;
            animation: clipeddlefslow 20s linear 0.01s infinite normal none running;
        }
        
        @keyframes clipeddlefslow {
            from {
            transform: rotate(0deg);
            }
            to {
            transform: rotate(-360deg);
            }
        }

        //media queries
        @media (max-width: 800px) {
            .main__container-nav2 {
                width: 50%;
                height: 320px;
            }
                .main__container-nav2 ul {
                padding: 8px;
                flex-direction: column;
                justify-content: space-around;
            }
                .main__container-nav2 ul li {
                width: 100%;
                height: 45px;
            }
        }



        
          
    `,
    sass: `
        .main__container-nav2 {
            width: 75%;
            height: 80px;
            position: relative;
            background: linear-gradient(180deg, rgb(31, 1, 165), rgb(83, 45, 255));;
            border-radius: 15px;
            box-shadow: 3px 2px 4px rgb(44, 44, 44);
            .cliped {
                z-index: 1;
                width: 150px;
                height: 150px;
                position: absolute;
                top: 0px;
                left: 0px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgb(235, 153, 2);
                clip-path: url(#figuracliped);
                transition: all 0.7s ease-in-out;
                animation: clipedd 20s linear 0.02s infinite normal none running;
            }
            @keyframes clipedd {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
            ul {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                .clicked2 {
                    color: rgb(47, 0, 255);
                    font-weight: 600;
                    font-size: 2.4rem;
                }
                li {
                    z-index: 2;
                    width: 120px;
                    height: 80px;  
                    a {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: white;
                        font-weight: 200;
                        font-size: 2rem;
                        cursor: pointer;
                        transition: all ease-in-out 0.2s;
                        &:hover {
                            font-weight: 600;
                            font-size: 2.4rem;
                        }
                    }
                }
            }
        }
        
        // animaciones al dar click
        
        .cliped-rigthf {
            z-index: 1;
            width: 150px;
            height: 150px;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(235, 153, 2);
            clip-path: url(#figuracliped);
            transition: all 0.7s ease-in-out;
            animation: clipeddrigfast 0.7s linear 0.00001s infinite normal forwards running;
        }
        @keyframes clipeddrigfast {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
        
        .cliped-rigths {
            z-index: 1;
            width: 150px;
            height: 150px;
            position: absolute;
            top: 0px;
            left: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(235, 153, 2);
            clip-path: url(#figuracliped);
            transition: all 0.7s ease-in-out;
            animation: clipeddrigslow 20s linear 0.01s infinite normal none running;
        }
        @keyframes clipeddrigslow {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
        
        
        .cliped-leftf {
            z-index: 1;
            width: 150px;
            height: 150px;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(235, 153, 2);
            clip-path: url(#figuracliped);
            transition: all 0.7s ease-in-out;
            animation: clipeddleffast 0.7s linear 0.00001s infinite normal forwards running;
        }
        @keyframes clipeddleffast {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(-360deg);
            }
        }
        
        .cliped-lefts {
            z-index: 1;
            width: 150px;
            height: 150px;
            position: absolute;
            top: 0px;
            left: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(235, 153, 2);
            clip-path: url(#figuracliped);
            transition: all 0.7s ease-in-out;
            animation: clipeddlefslow 20s linear 0.01s infinite normal none running;
        }
        @keyframes clipeddlefslow {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(-360deg);
            }
        }

        //media queries
        @media (max-width: 800px) {
            .main__container-nav2 {
                width: 50%;
                height: 320px;
                ul {
                    padding: 8px;
                    flex-direction: column;
                    justify-content: space-around;
                    li {
                        width: 100%;
                        height: 45px;
                    }
                }
            }
        }
    `,
    js: `
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
        
            let pocisionAnterior = \`\${Number(cliped.style.left.split('px')[0])}\`;
        
            
            cliped.style.left = \`\${Number(cliped.style.left.split('px')[0]) + diferenciaX}px\`;
            cliped.style.top = \`\${Number(cliped.style.top.split('px')[0]) + diferenciaY}px\`;
        
            let pocisionPosterior = Number(\`\${Number(cliped.style.left.split('px')[0])}\`);
        
        
            if(Number(pocisionAnterior) <= Number(pocisionPosterior)) {
        
                toggleClases(cliped, 1);
        
            } else {
        
                toggleClases(cliped, 2);
        
            }
        
            
        }
        
        window.onload = function() {
            elementsUlContainer[0].children[0].click();
        };
    `,
};

showButtoms(arraySections[0], arrNavOne, modal)
showButtoms(arraySections[1], arrNavTwo, modal)