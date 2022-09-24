//comentário de uma linha 

/*Comentário de múltiplas linhas*/

//Imprime mensagem no console do navegador (Modo desenvolvedor)
//console.log("Hello World!");

//Mostra uma janela com a mensagem no navegador
//alert("Hello World");

/*Mostra uma janela com a mensagem no navegador, além do campo para a 
pessoa digitar algo*/
//const nome = prompt("Qual é o seu nome?");
console.log("Olá, ", nome);

//Tipos de variáveis => const, let, var;
    // const => É um valor contante, que não muda;   ** Dar preferencia, quando o valor não muda **
    // let => Valor variável mias utilizado;
    // var => similar ao let, mas tem um problema de escopo. escopo => {}

 const idade = 21;
 let estadoCivil = 'solteiro';

// Funções
function imprimeNoConsole() {
    console.log("Função Imprime no Console ativada com sucesso!");
}

const user = {
    email: "richard@gmail.com",
    senha: 'senha@123'
}

// Chamando a função
// imprimeNoConsole();

//Função para capturar os dados de login e senha
function login() {
    // Não tem problema em usar aspas duplas ou aspas simples em JS
    const email = document.querySelector("#email2");
    const senha = document.querySelector('#senha2');

    // O ponto e vírgula (;) no final da linha de comando é facultativa no JS
    //  Tando a vígula como o + concatenam
    console.log("Email: ", email);
    console.log("Senha: " + senha);

    if(email.value == "" || senha.value == "") {
        alert("Preencha todos os campos!");
        return
    }

    if(email.value == user.email && senha.value == user.senha) {
        alert("Senha correta!");
    } else {
        alert("Sai daqui, hacker!");
    }

    email.value = "";
    senha.value = "";
}

function switchTheme() {
    const botao = document.querySelector("#flexSwitchCheckDefault")

    if (botao.checked) {
        document.body.style.backgroundColor = '#000'
        document.body.style.color = '#fff'

    } else {
        document.body.style.backgroundColor = '#fff'
        document.body.style.color = '#000'
    }
    
}
