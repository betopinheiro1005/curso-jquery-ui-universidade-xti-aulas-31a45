$( function() {

  var valor = 60;
  $("#valor").val(valor);

  $( "#slider" ).slider({
    min: 10,
    max: 100,
    value: valor,
    // orientation: "vertical",
    slide: function(event, ui){
      $("#valor").val(ui.value);
    }
  });
});