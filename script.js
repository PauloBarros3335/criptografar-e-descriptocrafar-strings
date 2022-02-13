
var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    pincel.fillStyle = 'green';
    pincel.fillRect(200, 0, 700, 400);


pincel.fillStyle = 'darkgreen';
   pincel.fillRect(200,50,350,300);

    // olhos
    pincel.fillStyle = 'black';
    pincel.fillRect(250, 110, 90, 90);
    pincel.fillRect(410, 110, 90, 90);

    // nariz
    pincel.fillRect(340, 200, 70, 100);

   // boca ou barba
    pincel.fillRect(300, 240, 40, 110);
    pincel.fillRect(410, 240, 40, 110);

    























var texto = document.querySelector('#input-texto').value;

var ElementoBotao = document.querySelector('.btn').value;

function criptografar(){

var texto = document.querySelector('#input-texto');

var textoModificado = texto.value.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');

var textoResultado = document.querySelector('.caixaDireita');

textoResultado.value = textoModificado
texto.value = '';
}

function descriptografar(){
var texto = document.querySelector('#input-texto');
var textoResultado = document.querySelector('.caixaDireita');

	var palavrasChave = ['enter','imes','ai','ober','ufat'];

var verificar = palavrasChave.some(elementoArray => texto.value.includes(elementoArray));

 if (verificar ){
var textoModificado = texto.value.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
	textoResultado.value = textoModificado;		
	texto.value = ''; 
	}else{

	alert('mensagem não está criptografada');		
}
}

function copiar(){
var textoResultado = document.querySelector('.caixaDireita');

navigator.clipboard.writeText(textoResultado.value)
textoResultado.value = '';
}








/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/