
let nivel = prompt("Informe seu nivel 1 a 3:  ");

switch(nivel){
    case '1':
        document.write('Acesso de administrador.')
        break;

    case '2':
        document.write('Acesso de visitantes e membros.')
        break;
    case '3':
        document.write('Acesso de gerencia')
        break;
    default:
        document.write('Nivel invalido. Verifique sua credencial.')  
}