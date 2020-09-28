$( function() {

  $("#catalogo li").draggable({
    helper: "clone"
  });

  $("#carrinho ul").droppable({
      drop: function(event, ui){
          $(this).append($("<li />").text(ui.draggable.text()));
          $(this).find(".mensagem").remove();
      }
  });

});
