function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado-final')
        document.querySelector('#peso').value;
        document.querySelector('#altura').innerHTML = document.querySelector('#altura').value.replace(",",".");

    function recebeEventoForm (evento){
       evento.preventDefault();
              const peso = form.querySelector('#peso');
       const altura = form.querySelector('#altura');

       
      
       let pesoPessoa = Number(peso.value.replace(",","."));
       let alturaPessoa = Number(altura.value.replace(",","."));
       let imc = pesoPessoa/(alturaPessoa**2);
       console.log(imc);
       console.log(pesoPessoa);
       console.log(alturaPessoa);


       let faixaIMC;

       if (imc > 0 && imc < 18.5){
        faixaIMC = ('Abaixo do peso')
       } else if (imc >=18.5 && imc <25){
        faixaIMC = ('Peso normal')
       } else if (imc >=25 && imc <30){
        faixaIMC = ('Sobrepeso')
       } else if (imc >=30 && imc <35){
        faixaIMC = ('Obesidade grau 1')
       } else if (imc >=35 && imc <40){
        faixaIMC = ('Obesidade grau 2')
       } else if (imc >=40){
        faixaIMC = ('Obesidade grau 3')
       }

       if (!pesoPessoa || pesoPessoa < 10 || pesoPessoa > 200){
        resultado.innerHTML = 
       `<p id='invalido'> <b> Informe um peso correto! </b>`;
       } else if (!alturaPessoa ||  alturaPessoa < 1 || alturaPessoa > 2.5){
        resultado.innerHTML = 
       `<p id='invalido'> <b> Informe uma altura correta!</b>`;
       }  
       else {
       resultado.innerHTML = 
       `<p id='valido'>Seu IMC é: = <b> ${imc.toFixed(2)} </b>| Resultado: <b> ${faixaIMC}</b></p>
       `;
    }
    }
    
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();