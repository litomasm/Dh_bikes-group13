const form = document.querySelector("#formlogin");
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const ulErrores = document.querySelector("div.errores ul");
const primerItem = document.querySelector('#primeritem')


form.addEventListener("submit", function (e) {
    ulErrores.innerHTML = ""
    let errores = []; 
    
    //Validaciones Email
    if (email.value == "") {
      errores.push("El email es obligatorio");
    } 

    //Validaciones Password
    if (password.value == "") {
      errores.push("La contraseña es obligatoria");
    } else if (password.value.length < 8) {
      errores.push("La contraseña debe tener más de 8 caracteres");
    }

    
    if (errores.length > 0) {
      e.preventDefault();
    }
    
    for (let i = 0; i < errores.length; i++) {
        ulErrores.style.margin = '10px 20px 0';
        ulErrores.style.fontSize = '15px';
        ulErrores.style.listStyleType = 'none'
        ulErrores.style.color = 'red'

        ulErrores.innerHTML += "<li style='left:0;'>" + errores[i] + "</li>";

        primeritem.style.marginTop = '10px';

        email.style.borderColor = '#ccc';
       if(email.value == ""){
         email.style.borderColor = 'red';
       }

       password.style.borderColor = '#ccc';
       if(password.value.length < 8 || password.value == ""){
        password.style.borderColor = 'red';
       }
       
    }
  });

