let idade = prompt("Entre com a idade");
// Se a idade informada for maior ou igual a 0 e menor que 15,
// exibir a mensagem “Criança”.
if (idade >= 0 && idade < 15) {
  document.write("Criança");
} else if (idade >= 15 && idade < 30) {
  document.write("Jovem");
} else if (idade >= 30 && idade < 60) {
  document.write("Adulto");
} else if (idade >= 60) {
  document.write("Idoso");
} else {
  document.write("Idade inválida");
}
