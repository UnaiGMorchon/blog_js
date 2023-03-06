// filtro buscador blog

// document.getElementById("buscadorBoton").addEventListener("click",filtrarPosts);
document.getElementById("buscador").addEventListener("keyup",filtrarPosts); // reconoce las teclas del teclado

function filtrarPosts()
{
    let text = document.getElementById("buscador").value.toLowerCase();
    console.log(text);
    let section =document.getElementById("nuevosBlog");
    let titulos = section.querySelectorAll("article > h3"); // hijos directos de article
    titulos = [...titulos]; // titulos = array.from[titulo];
    console.log(titulos);
    let titulosFiltrados = titulos.filter(titulo => !titulo.innerText.toLowerCase().includes(text));  //titulo.includes(text) los que no incluyan text que seran los que ocultamos
    
    titulos.forEach(titulo =>{
        let article = titulo.parentElement;
        article.style.display= "block"; // vuelve a aparecer lo que has quitado
    })

    // titulosFiltrados.forEach(titulo => console.log(titulo.innertxt));
    titulosFiltrados.forEach(titulo => {
        let article = titulo.parentElement; // quitas la palabra que pones en el buscador
        article.style.display= "none";
    });
}