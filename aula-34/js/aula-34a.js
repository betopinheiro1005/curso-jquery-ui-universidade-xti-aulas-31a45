$( function() {

  $("#link-0").click(function(){
    $("#country").val("");
    location.reload();
  });

  $("#country").autocomplete({
    source: function(request, response){
      $.ajax({
        "async": true,
        "crossDomain": true,
        // "url": "https://restcountries-v1.p.rapidapi.com/all",
        "url": "https://restcountries-v1.p.rapidapi.com/name/" + $("#country").val(),
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
          "x-rapidapi-key": "ef3ee9f9cemsh9681284674dd821p11c62ejsn348dcd6f93a9"
        },
        success: function(response){
          var lista = [];
          lista.push("Nome: " + response[0].name + "<br />Nome nativo: " + response[0].nativeName + "<br />Sigla: " + response[0].alpha2Code + "<br />Gentílico: " + response[0].demonym + "<br />Região: " + response[0].region + "<br />Subregião: " + response[0].subregion + "<br />Capital: " + response[0].capital + "<br />Área: " + formatar(response[0].area) + " km&sup2;" + "<br />População: " + formatar(response[0].population) + " habitantes" + "<br />");
         $("#info").html(lista);
        },
      });
    },
  });

  function formatar(nr) {
    return String(nr)
      .split('').reverse().join('').split(/(\d{3})/).filter(Boolean)
      .join('.').split('').reverse().join('');
  }

});