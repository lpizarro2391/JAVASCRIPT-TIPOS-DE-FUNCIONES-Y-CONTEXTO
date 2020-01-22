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
