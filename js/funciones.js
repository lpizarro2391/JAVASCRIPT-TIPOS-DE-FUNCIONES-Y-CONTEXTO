//Funciones Anonimas
/*
setInterval( function (){
  console.log ('Mensaje repetitivo');
},2000);
setTimeout(function(){
  console.log('Mensaje luego de una espera');
},20);

function Personalizada(numero1,numero2,function2){
  var resultado= numero1 + numero2;
  function2(resultado);
}

Personalizada(4,8,function(resultado){ alert(resultado);});

*/
//Funciones autoejecutables

(function(){
  console.log(this);//Aqui el resultado this es igual a window
})();

(function(){
  this.variable1 = "Hola Mundo";
})();

console.log(window.variable1);
/*
(function(nombre,apellido){
  console.log(nombre + '' + apellido);
})('Andres',Mensaje);

*/
