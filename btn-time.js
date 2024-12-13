var boton = document.getElementById("download");
var contador = 5;
var etiqueta = document.createElement("p");

etiqueta.innerHTML = "<b>VALIDAR CONFIRMACIÓN.</b>";
var id;

boton.parentNode.replaceChild(etiqueta, boton);

function descarga(){
   this.style.display = "none";
   id = window.setInterval(function(){
      contador--;
      if(contador < 0){
         etiqueta.parentNode.replaceChild(boton, etiqueta);
         window.clearInterval(id);
      }
      else{
         etiqueta.innerHTML = + contador.toString() + "<b> Segundos para Validar. </b>";
      }
   }, 1000)
}

var clickbtn = document.getElementById("btn");
clickbtn.onclick = descarga;