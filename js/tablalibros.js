
const url = '/PDFs/'; // Ruta de la carpeta que contiene los archivos PDF.

const conCategoría = [
    // ['ID', 'Título', 'Categoría', 'URL-Spreaker', 'PDF', 'URL-video']
    ['1', 'CON LOS PELOS DE PUNTA', 'Historia', 'URL-Spreaker', 'CON-LOS-PELOS-DE-PUNTA.pdf', 'URL-video'],
    ['2', 'ERASE UNA VEZ EN COLOMBIA', 'Juegos', 'URL-Spreaker', 'ERASE-UNA-VEZ-EN-COLOMBIA.pdf', 'URL-video'],
    ['3', 'TODO LO CONTRARIO', 'Adultos', 'URL-Spreaker', 'TODO-LO-CONTRARIO.pdf', 'URL-video'],
    ['4', 'Cuentos para desenredar enredos', 'Adultos', 'URL-Spreaker', 'cuentos-para-desenredar-enredos.pdf', 'URL-video'],
    ['5', 'Entre cuento y cuento', 'Niños', 'URL-Spreaker', 'ENTRE-CUENTO-Y-CUENTO.pdf', 'URL-video'],
    ['6', 'salud para contar', 'Adultos', 'URL-Spreaker', 'SALUD-PARA-CONTAR-2024.pdf', 'URL-video']
];

let historia = [];
let juegos = [];
let adultos = [];
let niños = [];
const listaCategoria = [
    ['historia', historia],
    ['juegos', juegos],
    ['adultos', adultos],
    ['niños', niños]
];

window.addEventListener('load', () => {

    localStorage.setItem('conCategoría', JSON.stringify(conCategoría));
    //EJEMPLO CON DIVs
    let divPadre = document.getElementById('listalibros');

    conCategoría.forEach((fila) => {

        let divHijoPorTítulo = document.createElement('div');
        divHijoPorTítulo.classList.add('elemento');
        let id = fila[0];
        fila.forEach((element, index) => {

            a = document.createElement('a');
            h3 = document.createElement('h3');
            // ['ID', 'Título', 'Categoría', 'URL-Spreaker', 'PDF', 'URL-video']
            switch (index) {
                case 0:
                    break;
                case 1:
                    h3.textContent = element;
                    divHijoPorTítulo.appendChild(h3);
                    break;
                case 2:
                    filtrarCategoria(fila, element);
                    break;
                case 3:
                    a.href = element;
                    a.target = '_blank';
                    a.textContent = 'Escuchar';
                    divHijoPorTítulo.appendChild(a);
                    break;
                case 4:
                    a.href = url + element;
                    a.download = url + element;
                    a.textContent = 'Descargar';
                    divHijoPorTítulo.appendChild(a);
                    break;
                case 5:
                    a.href = element;
                    a.target = '_blank';
                    a.textContent = 'Videos';
                    divHijoPorTítulo.appendChild(a);
                    break;
                default:
                    let urlForm = '/leerLibro.html?id=' + id;
                    a.href = urlForm;
                    a.target = '_blank';
                    a.textContent = 'Leer';
                    a.classList.add('btnLeer');
                    divHijoPorTítulo.appendChild(a);
                    break;


            }
            divPadre.appendChild(divHijoPorTítulo);
        });
    });

});

/*-------------------------------------------------------------*/

function filtrarCategoria(filaDeLibro, categoria) {

    switch (categoria) {
        case 'Historia':
            if (!historia.includes(filaDeLibro))
                historia.push(filaDeLibro);
            break;
        case 'Juegos':
            if (!juegos.includes(filaDeLibro))
                juegos.push(filaDeLibro);
            break;
        case 'Adultos':
            if (!adultos.includes(filaDeLibro))
                adultos.push(filaDeLibro);
            break;
        case 'Niños':
            if (!niños.includes(filaDeLibro))
                niños.push(filaDeLibro);
            break;
    }
}

/*-------------------------------------------------------------*/
function leerLibro(idLibro) {

    window.location = urlForm;
}

const btnAdultos = document.querySelector('#btnAdultos');
btnAdultos.addEventListener('click', () => {
    let listaOcultar = document.getElementById('listalibros');
    listaOcultar.style.display = 'none';
    let divPadre = document.getElementById('listaAdultos');

    if(divPadre.childNodes.length >= 0){
        divPadre.innerHTML = '';
    }

    adultos.forEach((fila) => {

        let divHijoPorTítulo = document.createElement('div');
        divHijoPorTítulo.classList.add('elemento');
        let id = fila[0];
        fila.forEach((element, index) => {

            a = document.createElement('a');
            h3 = document.createElement('h3');
            // ['ID', 'Título', 'Categoría', 'URL-Spreaker', 'PDF', 'URL-video']
            switch (index) {
                case 0:
                    break;
                case 1:
                    h3.textContent = element;
                    divHijoPorTítulo.appendChild(h3);
                    break;
                case 3:
                    a.href = element;
                    a.target = '_blank';
                    a.textContent = 'Escuchar';
                    divHijoPorTítulo.appendChild(a);
                    break;
                case 4:
                    a.href = url + element;
                    a.download = url + element;
                    a.textContent = 'Descargar';
                    divHijoPorTítulo.appendChild(a);
                    break;
                case 5:
                    a.href = element;
                    a.target = '_blank';
                    a.textContent = 'Videos';
                    divHijoPorTítulo.appendChild(a);
                    break;
                default:
                    let urlForm = '/leerLibro.html?id=' + id;
                    a.href = urlForm;
                    a.target = '_blank';
                    a.textContent = 'Leer';
                    a.classList.add('btnLeer');
                    divHijoPorTítulo.appendChild(a);
                    break;

            }
            divPadre.appendChild(divHijoPorTítulo);
        });
    });
});

// const ddlCategorias = document.querySelector('#ddlCategorias');
// ddlCategorias.addEventListener('change', () => {

//     let categoria = ddlCategorias.value;
//     let categoriaSeleccionada = listaCategoria.find((element) => element[0] == categoria);
//     console.log('categoriaSeleccionada', categoriaSeleccionada);
//     console.log('categoria', categoria);
//     // console.log('listaCategoria', listaCategoria);
//     let listaOcultar = document.getElementById('listalibros');
//     if (listaOcultar.style.display !== 'none') {
//         listaOcultar.style.display = 'none';
//     }
//     let divPadre = document.getElementById('listaAdultos');

//     if (divPadre.childNodes.length > 0) {
//         divPadre.innerHTML = '';
//     }
//     categoriaSeleccionada.forEach((fila) => {
//         let divHijoPorTítulo = document.createElement('div');
//         divHijoPorTítulo.classList.add('elemento');
//         let id = fila[0];
//         fila.forEach((element, index) => {

//             a = document.createElement('a');
//             h3 = document.createElement('h3');
//             // ['ID', 'Título', 'Categoría', 'URL-Spreaker', 'PDF', 'URL-video']
//             switch (index) {
//                 case 0:
//                     break;
//                 case 1:
//                     h3.textContent = element;
//                     divHijoPorTítulo.appendChild(h3);
//                     break;
//                 case 3:
//                     a.href = element;
//                     a.target = '_blank';
//                     a.textContent = 'Escuchar';
//                     divHijoPorTítulo.appendChild(a);
//                     break;
//                 case 4:
//                     a.href = url + element;
//                     a.download = url + element;
//                     a.textContent = 'Descargar';
//                     divHijoPorTítulo.appendChild(a);
//                     break;
//                 case 5:
//                     a.href = element;
//                     a.target = '_blank';
//                     a.textContent = 'Videos';
//                     divHijoPorTítulo.appendChild(a);
//                     break;
//                 default:
//                     let urlForm = '/leerLibro.html?id=' + id;
//                     a.href = urlForm;
//                     a.target = '_blank';
//                     a.textContent = 'Leer';
//                     a.classList.add('btnLeer');
//                     divHijoPorTítulo.appendChild(a);
//                     break;
//             }
//             divPadre.appendChild(divHijoPorTítulo);
//         });
//     });

// });