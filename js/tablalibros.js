
let url = '/PDFs/'; // Ruta de la carpeta que contiene los archivos PDF.
/*
 Agrega Event Listener a la página para poblar una tabla y una lista de materiales de audio/video. 
 La tabla se llena con datos del array sinCategoría, y la lista se llena con datos del array sinCategoría2. 
 Ambos arrays contienen información sobre materiales de audio y video, incluyendo URLs para escuchar, descargar y ver.
 */

window.addEventListener('load', () => {
    
const conCategoría = [
    ['1', 'CON LOS PELOS DE PUNTA', 'Historia', 'URL-Spreaker', 'CON-LOS-PELOS-DE-PUNTA.pdf', 'URL-video'],
    ['2', 'ERASE UNA VEZ EN COLOMBIA', 'Juegos', 'URL-Spreaker', 'ERASE-UNA-VEZ-EN-COLOMBIA.pdf', 'URL-video'],
    ['3', 'TODO LO CONTRARIO', 'Adultos', 'URL-Spreaker', 'TODO-LO-CONTRARIO.pdf', 'URL-video'],
    ['4', 'Cuentos para desenredar enredos', 'Adultos', 'URL-Spreaker', 'cuentos-para-desenredar-enredos.pdf', 'URL-video'],
    ['5', 'Entre cuento y cuento', 'Niños', 'URL-Spreaker', 'ENTRE-CUENTO-Y-CUENTO.pdf', 'URL-video'],
    ['6', 'salud para contar', 'Adultos', 'URL-Spreaker', 'SALUD-PARA-CONTAR-2024.pdf', 'URL-video']
];

localStorage.setItem('conCategoría', JSON.stringify(conCategoría));
    //EJEMPLO CON DIVs
    let divPadre = document.getElementById('listalibros');
    
    conCategoría.forEach((fila, index) => {
        
        let divHijoPorTítulo = document.createElement('div');
        divHijoPorTítulo.classList.add('elemento');
        let id = fila[0];
        fila.forEach((element, index) => {
            
            a = document.createElement('a');
            h3 = document.createElement('h3');
            btnLeer = document.createElement('button');
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
                    let urlForm = '/leerLibro.html?id='+id;
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

    // filtrarCategoria();

});

/*-------------------------------------------------------------*/

// function filtrarCategoria() {

//     let historia = [];
//     let juegos = [];
//     let adultos = [];

//     /*
//     let conCategoría = [
//         ['CON LOS PELOS DE PUNTA', 'Historia', 'URL-Spreaker', 'CON-LOS-PELOS-DE-PUNTA.pdf', 'URL-video'],
//         ['CON LOS PELOS DE PUNTA', 'Juegos', 'URL-Spreaker', 'CON-LOS-PELOS-DE-PUNTA.pdf', 'URL-video'],
//         ['CON LOS PELOS DE PUNTA', 'Adultos', 'URL-Spreaker', 'CON-LOS-PELOS-DE-PUNTA.pdf', 'URL-video']
//     ];
//     */
//     conCategoría.forEach((fila, index) => {
//         let categoria = '';
//         fila.forEach((element, index) => {
//             categoria = element[2];
//         });
//         switch (categoria) {
//             case 'Historia':
//                 if (!historia.includes(fila))
//                     historia.push(fila);
//                 break;
//             case 'Juegos':
//                 if (!juegos.includes(fila))
//                     juegos.push(fila);
//                 break;
//             case 'Adultos':
//                 if (!adultos.includes(fila))
//                     adultos.push(fila);
//                 break;
//         }
//     });
// }

/*-------------------------------------------------------------*/
function leerLibro(idLibro){
    
    window.location = urlForm;
}