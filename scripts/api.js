'use strict';

//Variables para acceder a la API
const accesKey = "X-5U291D-SKPZ0cgRSbeeDl48sBzTmULWY7reqPjGEo";
const endPoint = 'https://api.unsplash.com/search/photos'; //Punto donde queremos llamar la API

//Con e parametro consulta, unsplash nos delvolvera las imagenes
const api = async(query) =>{
    try {
    //Mediante fetch se comunica con unsplash
    let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey); 

    //Acceder a la información que nos devueleve la repuesta anterior
    let jsonResponse = await response.json();
    let imagesAPI = await jsonResponse.results;
    const contenedor_img = document.getElementById("container-cards");
    console.log(imagesAPI);
    for(let i of imagesAPI.urls) {
        let urlImg = imagesAPI[i].urls[0];
        const image = document.createElement('img');
        image.src = urlImg;
        document.appendChild(contenedor_img);
        }
        
    } catch (error) {
        console.error(error);
}
}


function createImages(imagesAPI){
    console.log(imagesAPI);
    
    
}

api("cat")



/*
const endPoint = 'https://api.unsplash.com/search/photos?query=dog&client_id=X-5U291D-SKPZ0cgRSbeeDl48sBzTmULWY7reqPjGEo'; //Punto donde queremos llamar la API

fetch(endPoint)
.then( (response) => response.json())
.then((json)=>{
    for(let objecto of json){
        console.log(objecto);
    }
})
.catch((error)=>console.error(error))
.finally(console.info("Ha finalizado la petición"))
*/


/*fetch('https://api.unsplash.com/photos?page=1>')
.then( (response) => response.json())
.then((json)=>{
    for(let object of json){
        console.log(object);
    }
})
.catch((error)=>console.error(error))
.finally(console.info("Ha finalizado la petición"))*/