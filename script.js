//Questâo 1
//função para  verrificar quais são os números até 1000 que são primos

function numeroprimo(num) {
    for (var divisor = 2; divisor < num; divisor++) 
    if (num % divisor == 0) return false;
    return true;
}
var limite = 1000;
for (var i = 2; i < limite; i++) if (numeroprimo(i)) console.log(i);

//Questâo 2
//Função para verificar se a senha é valida  com os seguintes critérios: ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula e um número.

function validarsenha(senha) {
    if (senha.length < 8) {
      return "A senha deve ter pelo menos 8 caracteres.";
    }
  
    if (!/[A-Z]/.test(senha) || !/[a-z]/.test(senha) || !/[0-9]/.test(senha)) {
      return "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número.";
    }
    return "A senha é válida.";
  }
  
//Questâo 3
//calcular fatorial de 1 até 10
  
  function numerofatorial(num) {
    var fatorial = 1;
    for (var i = 1; i <= num; i++) {
      fatorial *= i;
    }
    return fatorial;
  }
  
  for (var i = 1; i <= 10; i++) {
    console.log(`O fatorial de ${i} é ${numerofatorial(i)}`);
  }

//Questâo 4
//verificar se o quadrado do número é perfeito

function verificarquadrado(numero) {
    if (numero < 0) {
      return false; 
    }
    
    
    let raiz = Math.floor(Math.sqrt(numero));

    
    return raiz * raiz === numero;
  }

  //Exemplo para testar o codigo
  console.log(verificarquadrado(25))
  console.log(verificarquadrado(26))
  console.log(verificarquadrado(-20))
  