function validar() {
  var nome = document.getElementById('inputNome');
  var telefone = document.getElementById('inputTelefone');
  var endereco = document.getElementById('inputEnd');
  var cidade = document.getElementById('inputCidade');
  var cep = document.getElementById('inputCep');
  if (nome.value == ""){
    alert("Nome não informado")
    nome.focus();
  }
  if (telefone.value == ""){
    alert("Telefone não informado")
    telefone.focus();
  }
  if (endereco.value == ""){
    alert("Endereço não informado")
    endereco.focus();
  }
  if (cidade.value == ""){
    alert("Cidade não informada")
    cidade.focus();
  }
  if (cep.value == ""){
    alert("CEP não informado")
    cep.focus();
  }
  alert("Formulário enviado com sucesso");
}
