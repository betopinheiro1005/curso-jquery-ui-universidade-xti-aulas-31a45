$( function() {

  $("#drag").draggable();

  $("#drop").droppable({
      drop: function(event, ui){
          $(this).addClass("ui-state-highlight").html("Elemento arrastável solto nesta área!");
          $("#drag").css("background", "yellow");
      }
  });

});
