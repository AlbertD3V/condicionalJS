// Declarando o objeto com array

let banco = {
       1: { user: 'Albert', senha: '321', nivel: 'JUNIOR' },
       2: { user: 'icaro', senha: '212', nivel: 2 },
       3: { user: 'Luan', senha: '215', nivel: 3 }
     };
     
     let login = prompt("Informe seu nome: ");
     let password = prompt("Informe sua senha: ");
     
     if (banco[1].user === login && banco[1].senha === password) {
       document.write("SEJA BEM-VINDO " + banco[1].nivel);
     } else if (banco[2].user === login && banco[2].senha === password) {
       document.write("SEJA BEM-VINDO " + banco[2].nivel);
     } else if (banco[3].user === login && banco[3].senha === password) {
       document.write("SEJA BEM-VINDO " + banco[3].nivel);
     } else {
       document.write("USUÁRIO INVÁLIDO");
     }
     A