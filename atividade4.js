// Declarando o objeto com array

let banco = {
       1: { user: 'Albert', senha: '321', nivel: 'JUNIOR' },
       2: { user: 'icaro', senha: '212', nivel: 'MONITOR' },
       3: { user: 'Luan', senha: '215', nivel: 'USUARIO' }
     };
     
     let login = prompt("Informe seu nome: ");
     let password = prompt("Informe sua senha: ");

     let passport = false; //vericador do usuario

 // pecorrendo objeto com o FOR    
     for (let key in bd) {
       if (bd[key].user === login && bd[key].senha === password) {
         passport = true;
         break; // Se encontrou uma correspondência, saia do loop
       }
     }
     
     if (passport) {
       document.write("SEJA BEM-VINDO ");
     } else {
       document.write("USUÁRIO INVÁLIDO");
     }
     