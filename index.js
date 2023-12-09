// Código para mostrar detalles de la foto
function mostrarDetalles(elemento){
    document.getElementById('imagen').innerHTML = elemento.alt;
 }
 
 function revertir(){
    document.getElementById('imagen').innerHTML = "Pasa el ratón sobre una imagen para mostrar detalles.";
 }
 