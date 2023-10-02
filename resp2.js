let user = 'albert@bol.com.br'
let senha = 101520

let nome =prompt ("Seu nome?")
let login = prompt("Informe seu usuario: ")
let password = prompt("Senha: ")
/*
if ((login == user) && (password == senha) ){
    console.log("SEJA BEMVINDO") ;
    document.write("SEJA BEMVINDO");
} else{
    console.log("SENHA E USARIO INVALIDO")
    document.write("USARIO INVALIDO");
}
*/
((login == user && password == senha)) ? document.write("SEJA BEMVINDO") : document.write("USARIO INVALIDO");