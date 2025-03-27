let altura = 1.62
let peso = 44
let imc = peso / (altura * altura);

if (imc < 17) {
    console.log('Você está muito abaixo do peso, seu imc ideal seria entre 18.5 e 24.99');
} else if (imc > 17 && imc <= 18.49) {
    console.log('você está abaixo do peso, o seu imc ideal seria entre 18.5 e 24.99' );
    } else if (imc >= 18.5 && imc <= 24.99) {
       console.log('você esta no peso normal' );
    } else if (imc >= 25 && imc <= 29.99) {
       console.log('Você está acima do peso, o seu imc ideal seria entre 18.5 e 24.99');
      } else if (imc >= 30 && imc <= 34.99) {
        console.log('Você está na Obesidade procure ajuda')
      } else 
        console.log('Você extremamente obeso procure ajuda imediata!');
      