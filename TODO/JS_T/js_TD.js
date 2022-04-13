tarea = document.querySelector("#Tarea");
pendientes = document.querySelector("#list");
button = document.querySelector("#but2");

//Nombre de Usuario en Nav
let user = localStorage.getItem("Usuario");
document.getElementById("userName").innerHTML = user;


console.log(user);
//Adicionar tareas
let i = 0;

button.addEventListener("click", e => {
  e.preventDefault;
  var lista = document.createElement("DIV");
  lista.className = "pendientes";

  if (e.target.id === "but2") {
    if (tarea.value === "" || tarea.value === " " || tarea.value === null) {
      tarea.value = "Falta ingresar una tarea";
    } else {
      let tareas = document.createTextNode(tarea.value);
      lista.appendChild(tareas);
      pendientes.appendChild(lista);
      tarea.value = "";
    }
  }
});

//delete tasks

pendientes.addEventListener("click", e=>{
  /* let lista = pendientes.childNodes;
  pendientes.removeChild(lista); */
  pendientes.removeChild(e.target);
});



/* for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", remove, false);
} */

/* lista = document.querySelectorAll(".pendientes");
lista.addEventListener("onclick", e => {
  e.preventDefault;
  
  element.parentNode.removeChild(element);
}); */
console.log(pendientes);
