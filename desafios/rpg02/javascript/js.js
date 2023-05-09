$(document).ready(function() {
    var botao = $('.bt1'); //classe no a clicado
    var dropDown = $('.ul-menu'); //classe do submenu do ul que vai arbrir ao clicar
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

   $(document).ready(function() {
    var botao = $('.bt2'); //classe no a clicado
    var dropDown = $('.ul-fichas'); //classe do submenu do ul que vai arbrir ao clicar
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });