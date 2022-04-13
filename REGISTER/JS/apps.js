const form = document.querySelector("#infos");
const name = document.querySelector("#name");
const lastName = document.querySelector("#lastName");
const passWord = document.querySelector("#password");
const email = document.querySelector("#email");
const error = document.querySelector("#error");

function numero() {
  if (mobile.value >= 0 || mobile.value <= 0) {
    return (numero = true);
  } else {
    return (numero = false);
  }
}

form.addEventListener("click", e => {
  let mensaje = [];
  e.preventDefault();

  if (e.target.id === "button") {
    if (name.value === "" || name.value === null || name.value === " ") {
      mensaje.push("Nombre esta vacio");
    }
    if (
      lastName.value === "" ||
      lastName.value === null ||
      lastName.value === " "
    ) {
      mensaje.push("Apellido esta vacio");
    }
    if (email.value === "" || email.value === null || email.value === " ") {
      mensaje.push("Correo esta vacio");
    }
    if (
      passWord.value === "" ||
      passWord.value === null ||
      passWord.value === " "
    ) {
      mensaje.push("Contraseña esta vacia");
    }
    if (passWord.value.length < 6 || passWord.value.length > 20) {
      mensaje.push(
        "La contraseña debe ser mayor a 6 digitos y menor de 20 digitos"
      );
    }
    if (mobile.value == null || mobile.value == " " || mobile.value == "") {
      mensaje.push("Celular esta vacio");
    }
    if (numero === false) {
      mensaje.push("Celular debe ser numeros");
    }

    if (mensaje.length > 0) {
      error.innerHTML = mensaje.join(",   ");
    } else {
      localStorage.setItem("Usuario", name.value);
      document.location.href = "../TODO/index_TODO.html";
    }
  }
});

console.log(numero());
