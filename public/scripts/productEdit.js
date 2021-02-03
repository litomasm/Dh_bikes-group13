const form = document.querySelector('.formRegistroProducto2');

const name = document.querySelector('input.nombreDelProducto');
const price = document.querySelector('input.precioDelProducto');
const category = document.querySelector('select#category');
const description = document.querySelector('#description');
const info = document.querySelector('#information');
const button = document.querySelector('.botonguardarproducto')
const errors = document.querySelector('ul.errors');




button.addEventListener("click", function (e) {
   
    errors.innerHTML = '';

    let errores = []; 
    //Validaciones Nombre
    if (name.value.trim().length == 0) {
      errores.push("El nombre es obligatorio");
    } else if (name.value.trim().length <= 2) {
      errores.push("El nombre debe tener más de 2 caracteres");
    }
    
    //Validaciones Precio
    if (price.value == "") {
      errores.push("El precio es obligatorio");
    } else if (price.value.length < 3) {
      errores.push("Este campo debe tener al menos 3 digitos");
    } 

    //Categoria 
    if(category.value == 0){
      errores.push("Tiene que seleccionar una categoria");
    }
    
    //Validaciones de Descripcion
    if (description.value.trim().length <= 10) {
        errores.push("La descripción debe tener más de 10 caracteres");
      }

         
    //Validaciones de Informacion
    if (information.value.trim().length <= 10) {
        errores.push("La informacion debe tener más de 10 caracteres");
      }
   
    if (errores.length > 0) {
      e.preventDefault();
     
    }
    
    
    for (let i = 0; i < errores.length; i++) {
      errors.style.color = 'red';
      errors.style.listStyleType = 'none';
      errors.style.margin = '0px';  
      errors.style.padding = '0px';   
      errors.innerHTML += "<li style='position:static;margin-bottom:5px'>" + errores[i] + "</li>";
    }

   
    if(!(errores.length)){
        form.submit()
    }

  });
