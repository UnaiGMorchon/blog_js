// apartir de aqui son funciones
  function createPostEvent(event) {
    event.preventDefault();
    let titulo = document.getElementById("titulo").value.trim(); // trim quita espacios delante y detras de la cadena string
    let contenido = document.getElementById("contenido").value.trim();
    createPost (titulo,contenido);
    //iconoEditar.addEventListener("click", upDatePost);
    document.getElementById("blogForm").reset();
  }

  function createPost(titulo,contenido){
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        let article = document.createElement("article");
        //let iconoBorrar = document.createElement("i");
        // let iconoEditar = crearIconoEditar;
        let iconoEditar = crearIcono ("fa-pencil", upDatePost);
        // let iconoEditar = document.createElement("i");
        let iconoBorrar = crearIcono("fa-trash",deletePost);
        //iconoBorrar.classList.add("fa", "fa-trash",deletePost);
        // iconoEditar.classList.add("fa", "fa-pencil");  crea un nuevo elemento i con las clases "fa" y ""fa-pencil"" 
        h3.innerText = titulo;
        p.innerText = contenido;
        article.appendChild(h3); // el article seria el parent.
        article.appendChild(p);
        article.appendChild(iconoEditar);
        article.appendChild(iconoBorrar);
        nuevosBlog.insertBefore(article, nuevosBlog.children[1]);
        // iconoBorrar.addEventListener("click", deletePost); 

  }
  // crear icono editar
  /* function crearIconoEditar(){
    let iconoEditar = document.createElement("i");
    iconoEditar.classList.add("fa", "fa-pencil");
    iconoEditar.addEventListener("click", upDatePost);
    return iconoEditar;
  } */



  // funcion crear icono generico
  function crearIcono(simbolo,callback){
    let icono = document.createElement("i");
    icono.classList.add("fa", simbolo);
    icono.addEventListener("click", callback);
    return icono;
  }

  function deletePost(event){
    let element = event.target;
    let parent = element.parentElement;
    // parent.remove(); quitar esto porque al dar al boton cancelar de brorara sigue borrandolo
    let text = parent.getElementsByTagName("h3")[0].innerText;
    if (confirm("¿deseas borrar este elemento? \n" + text)) {
      parent.remove();
    }
  }

  function savePost(event){
    let element = event.target;
    let parent = element.parentElement; //parent = articulo
    let titulo = parent.getElementsByTagName("input")[0].value;
    let contenido = parent.getElementsByTagName("textarea")[0].value;
    let h3 = document.createElement("h3");
    let p = document.createElement("p");

    h3.innerText = titulo;
    p.innerText = contenido;
    parent.appendChild(h3);
    parent.appendChild(p);

    parent.getElementsByTagName("input")[0].remove();
    parent.getElementsByTagName("textarea")[0].remove();
    element.remove();

    let iconoEditar = crearIcono("fa-pencil",upDatePost);
    let iconoBorrar = crearIcono("fa-trash",deletePost);
    parent.appendChild(iconoBorrar);
    parent.appendChild(iconoEditar);
    parent.querySelector(".fa-close").remove();

    let breaks = parent.getElementsByTagName("br");
    breaks = [...breaks];
    breaks.forEach(element => {
      element.remove();
    });

  }


  function cancelEdit(event,textoTitulo,textoParrafo){
    let element = event.target;
    let parent = element.parentElement; //parent = articulo
    let titulo = document.createElement("h3");
    let parrafo = document.createElement("p");
    titulo.innerText = textoTitulo;
    parrafo.innerText = textoParrafo;
    parent.appendChild(titulo);
    parent.appendChild(parrafo);
    parent.getElementsByTagName("input")[0].remove();
    parent.getElementsByTagName("textarea")[0].remove();
    //let iconoEditar = crearIcono ("fa-pencil", upDatePost);
    // parent.appendChild(iconoEditar);
    element.remove();
    parent.querySelector(".fa-paper-plane-o").remove();

    let iconoEditar = crearIcono("fa-pencil",upDatePost);
    let iconoBorrar = crearIcono("fa-trash",deletePost);
    parent.appendChild(iconoBorrar);
    parent.appendChild(iconoEditar);

    let breaks = parent.getElementsByTagName("br");
    breaks = [...breaks]; // array.from(breaks);
    breaks.forEach(element => {
      element.remove();
    });
  }








      function upDatePost (event){
    /*  console.log(event);
      console.log(event.target); */
      let element = event.target; // la acción que hace el evento.
    // creo variable parent y le asigno el valor de "parent.elemet que devuelve el elemento padre del elemento especificado.""
      let parent = element.parentElement; // parente es realmente el articulo que recoje todo.
      // creo variable titulo 
      let titulo = parent.getElementsByTagName("h3")[0].innerText; //coja el primero del h3 y con el innner text lo pone
      let texto = parent.getElementsByTagName("p")[0].innerText; //coja el primero del parrafo y con el inner text lo pone
      /* console.log("titulo" + titulo); // pilla el titulo
      console.log("texto" + texto); // pilla el texto
    */
      let inputTitulo = document.createElement("input"); // crea un input vacio para titulo
      let textArea = document.createElement("textarea"); // crea un input vacio para parrafo texto
      let br = document.createElement("br"); // creas un elemeto br

      //let iconoCancelar = document.createElement("i");
      //iconoCancelar.classList.add("fa", "fa-close");
      

    let iconoCancelar = crearIcono("fa-close", function(event){
      cancelEdit(event,titulo,texto);
    })
    let iconoGuardar = crearIcono("fa-paper-plane-o", savePost);
    
     
      inputTitulo.setAttribute("type", "text"); // consigue los datos del titulo y no hace falta porner atributes de texto parrafo porque es tipo textrea
      inputTitulo.value = titulo; // meto el texto del titulo dentro del valor de inputTitulo
      textArea.value = texto;
      parent.appendChild(inputTitulo); // devuelve el valor del inputTitulo
      parent.appendChild(br);
      parent.appendChild(textArea);
      parent.appendChild(iconoCancelar);
      parent.appendChild(iconoGuardar);


      // parent.getElementsByTagName("h3")[0].remove(); este seria sin poner el let siguiente
      
      /* iconoCancelar.addEventListener("click", function (event){
        cancelEdit(event,titulo,texto);
      }); */
    
      let titulo1 = parent.getElementsByTagName("h3")[0];
      titulo1.remove();
      parent.getElementsByTagName("p")[0].remove(); // dos formas de hacerlo
      element.remove();
      parent.querySelector(".fa-trash").remove();
      
    }



    ///apartir de aqui es ejecucion

    //evento para submit
let form = document.getElementById("blogForm");
form.addEventListener("submit",createPostEvent); // se llama a creatopost igual que el callback


createPost("manzana","nananan");
createPost("melocoton","meloooooon");
createPost("limon","onnnnn");
