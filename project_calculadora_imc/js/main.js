const btnCalcular = document.getElementById('btn-calcular');
const btnLimpar = document.getElementById('btn-limpar');
const imcImagem = document.getElementById('imc-imagem');
const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const resultado = document.getElementById('resultado');
const resultadoImc = document.getElementById('resultado-imc');

const getText = (imc) => {

    if(imc > 40) return Array('você está com Obesidade grau III', 6) ;
    if(imc > 35) return Array('você está com Obesidade grau II', 5) ;
    if(imc > 30) return Array('você está com Obesidade grau I', 4) ;
    if(imc > 25) return Array('você está levemente acima do peso', 3); 
    if(imc > 18.5) return Array('você está com peso ideal', 2) ;
    return Array('você está abaixo do peso', 1) ;

}

const imcCalc = () => {

    if(!peso.value || !altura.value || !nome.value){

        resultado.innerText = 'É obrigatório o preenchimento de todos os campos.';

        resultadoImc.innerText = '';

        imcImagem.src = '';

        imcImagem.style.display = 'none';
       
    }else{

        const valorImc = peso.value / (altura.value * altura.value);

        const arrayResult = getText(valorImc);

        let nomeArray = nome.value.split(' ');

        resultado.innerText = nomeArray[0] + ', ' + arrayResult[0];        

        resultadoImc.innerHTML = 'Seu IMC é ' + valorImc.toFixed(0) + 'kg/m<sup>2</sup>';

        imcImagem.src = './img/'+ arrayResult[1] +'.png';

        imcImagem.style.display = 'block';
    }

}

const limparDados = () => {
    imcImagem.src = '';
    imcImagem.style.display = 'none';
    nome.value  = '';
    peso.value  = '';
    altura.value = '';
    resultado.innerText = '';
    resultadoImc.innerText = '';
}

btnCalcular.addEventListener('click', imcCalc);

btnLimpar.addEventListener('click', limparDados);




// function calcularImc(){

//     let nome = document.getElementById('nome').value;
//     let peso = document.getElementById('peso').value;
//     let altura = document.getElementById('altura').value/100;
//     let resultado;

//     imc = peso / (altura * altura);
    
//     if(imc > 40){ 
//         resultado = 'Obesidade 3' ;
//     }else if(imc > 35){ 
//         resultado = 'Obesidade 2' ;
//     }else if(imc > 30){ 
//         resultado = 'Obesidade 1' ;
//     }else if(imc > 25){ 
//         resultado = 'Acima do peso'; 
//     }else if(imc > 18){ 
//         resultado = 'Ideal' ;
//     }else{ 
//         resultado = 'Abaixo do peso' ;
//     } 
    
//     alert(imc + ' = ' + resultado)
// }