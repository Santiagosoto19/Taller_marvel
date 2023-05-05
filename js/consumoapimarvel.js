

function consumirAPI(){

    console.log("Iniciando busqueda");
    
    var apikey = "d8b02dc109d7a677a61793797397e470";
    var ts = "1000";
    var hash = "15aa89127ec7f5cc41b3362aa8c68a9b";
    var url = 'https://gateway.marvel.com/v1/public/characters?ts=' + ts +"&apikey=" + apikey + "&hash=" + hash; 
    
  // agrege una s 

    fetch(url)
    .then(Response => Response.json())
    .then(json => { 

    
        const div_hero = document.getElementById('hero');

      for(element of json.data.results) {
        
        const srcImagen = element.thumbnail.path+ "." + element.thumbnail.extension;
        const nameHero = element.name;
        const description = element.description;

        // createDivHero(div_hero, srcImagen, nameHero, description);

        const divPadre = document.createElement('div');
        const divHijo = document.createElement('div');
        const texto_Name = document.createElement('h3');
        const img = document.createElement('img');
        const descripcion = document.createElement('p');
        

        texto_Name.textContent = nameHero;
        img.src = srcImagen;
        descripcion.textContent = description; 

        divHijo.appendChild(texto_Name);
        divHijo.appendChild(img);
        divHijo.appendChild(descripcion);
        divPadre.appendChild(divHijo);
        div_hero.appendChild(divPadre);

        divPadre.classList.add("personaje");


        var series = document.createElement("a");
        series.innerText = "Ver Series";
        series.href = "series.html?objeto=" + element.series.collectionURI;
        divHijo.appendChild(series);

        var comics = document.createElement("a");
        comics.innerText = "Ver comics";
        comics.href = "comics.html?objeto=" + element.comics.collectionURI;
        divHijo.appendChild(comics);

        var eventos = document.createElement("a");
        eventos.innerText = "Ver Eventos";
        eventos.href = "eventos.html?objeto=" + element.events.collectionURI;
        divHijo.appendChild(eventos);


      };
        console.log(json);
    })

    // function createDivHero(div_hero, srcImagen, nameHero, description ){

    //     const divPadre = document.createElement('div');
    //     const divHijo = document.createElement('div');
    //     const texto_Name = document.createElement('h3');
    //     const img = document.createElement('img');
    //     const descripcion = document.createElement('p');
        

    //     texto_Name.textContent = nameHero;
    //     img.src = srcImagen;
    //     descripcion.textContent = description; 

    //     divHijo.appendChild(texto_Name);
    //     divHijo.appendChild(img);
    //     divHijo.appendChild(descripcion);
    //     divPadre.appendChild(divHijo);
    //     div_hero.appendChild(divPadre);

    //     divPadre.classList.add("personaje");

    // }

  
}


  function comicsMarvel(){


    const Url_location = window.location.search;
    const url_parametros = new URLSearchParams(Url_location);
    const objeto = url_parametros.get('objeto');
    

    var url = Arreglo_url(objeto)

    var contenido = document.getElementById("contenido");

    fetch(url)
    .then(response => response.json())
    .then(json => {

      for( item of json.data.results){

        console.log(item.title)
        console.log(item.urls[0].url)

        var title = document.createElement("p")
        title.innerText = item.title

        contenido.appendChild(title);

        var enlace = document.createElement("a")
        enlace.href = item.urls[0].url
        enlace.innerText = item.urls[0].url

        contenido.appendChild(enlace)


      }


    })



  }

  function eventoMarvel(){


    const Url_location = window.location.search;
    const url_parametros = new URLSearchParams(Url_location);
    const objeto = url_parametros.get('objeto');
    

    var url = Arreglo_url(objeto)

    var contenido = document.getElementById("contenido");

    fetch(url)
    .then(response => response.json())
    .then(json => {

      for( item of json.data.results){

        console.log(item.title)
        console.log(item.urls[0].url)

        var title = document.createElement("p")
        title.innerText = item.title

        contenido.appendChild(title);

        var enlace = document.createElement("a")
        enlace.href = item.urls[0].url
        enlace.innerText = item.urls[0].url

        contenido.appendChild(enlace)


      }


    })



  }

  function serieMarvel(){


    const Url_location = window.location.search;
    const url_parametros = new URLSearchParams(Url_location);
    const objeto = url_parametros.get('objeto');
    

    var url = Arreglo_url(objeto)

    var contenido = document.getElementById("contenido");

    fetch(url)
    .then(response => response.json())
    .then(json => {

      for( item of json.data.results){

        console.log(item.title)
        console.log(item.urls[0].url)

        var title = document.createElement("p")
        title.innerText = item.title

        contenido.appendChild(title);

        var enlace = document.createElement("a")
        enlace.href = item.urls[0].url
        enlace.innerText = item.urls[0].url

        contenido.appendChild(enlace)


      }


    })



  }

function Arreglo_url(url_inconple){

  var apikey = "d8b02dc109d7a677a61793797397e470";
  var ts = "1000";
  var hash = "15aa89127ec7f5cc41b3362aa8c68a9b";

  var url_comple = "https://" + url_inconple.substring(7, url_inconple.length) + "?ts=" + ts + "&apikey=" + apikey + "&hash=" + hash  
return url_comple
}

