$(document).ready(function() {

    $("#link0").click(function(){
      limpa_formulario_cep();
      location.reload();
    });

    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
        $("#ibge").val("");
    }

    $("#cep").focus();

    $("#cep").mask("99999-999");

    $("#cep").autocomplete({
        source: function(request, response){
          $.ajax({
            "async": true,
            "crossDomain": true,
            "url": "https://viacep.com.br/ws/" + $("#cep").val() + "/json",
            "method": "GET",
            success: function(response){
                if (!("erro" in response)) {
                    //Atualiza os campos com os valores da consulta.
                    $("#rua").val(response.logradouro);
                    $("#bairro").val(response.bairro);
                    $("#cidade").val(response.localidade);
                    $("#uf").val(response.uf);
                    $("#ibge").val(response.ibge);
                } //end if.
                else {
                    //CEP pesquisado não foi encontrado.
                    $("#cep").val("");
                    alert("CEP não encontrado.");
                }
            },
          });
        },
      });

});
