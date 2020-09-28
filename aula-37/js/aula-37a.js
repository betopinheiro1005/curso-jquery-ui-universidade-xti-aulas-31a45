$( function() {

  $( "#dialog" ).dialog({
    modal: true,
    width: "500px",
    buttons: {
      "Ok": function(){
        $(this).dialog("close");
      }
    }
  });

});