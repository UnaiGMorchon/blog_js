let boton = document.getElementById("guardar");
    boton.addEventListener("click",guardarElemento);

    function guardarElemento() {
        let text = document.getElementById("input").value.trim(); //para quitar espacios de delarte y atras 
        let textToCheck = text.replace(/\s/g, "");
        if(textToCheck.length <2){
            return;
        }
        if (alreadyExists(text)){
            return;
        }
        let li = document.createElement("li");
        let icono= document.createElement("i");// crea icono
        icono.classList.add("fa" ,"fa-trash"); // añadir iconos
        li.innerText=text; // mejor innertext para que no me salga el plan h1 y que no te puedan acceder a la web.
        li.appendChild(icono);// icocno lo meter en li
        li.addEventListener("click",clickImportant);// aqui los escucha
        
        document.getElementById("lista").appendChild(li);
        document.getElementById("input").value="";
    }
    function clickImportant(event){ // para el event necesitamos los listeners
        let element = event.target;
        if(element.classList.contains("fa-trash")){
            deleteParent(element);
            return;
        }
        toggleImportant(element); //tenemos el objeto que tiene le elemento
    }

    function toggleImportant(element){
            element.classList.toggle("important"); // class lista accede a todas las lasta de clases.
    }

    function deleteParent(element){
        let parent = element.parentElement;
        let text= parent.innerText;
        if(confirm("¿deseas borrar este elemento? \n" + text)){
        
        parent.remove();
    }
    }
    function alreadyExists(text){
        let lis = document.getElementById("lista");
        let elementosLista= lista.getElementsByTagName("li");
        for(let i=0; i<elementosLista.length; i++){
            if (text === elementosLista[i].innerText){
                return true;
            }
        }  
        return false;     
    }
