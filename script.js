
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
var textInput
= document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar() {
    var texto= textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "obter").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto +'</textarea>' + '<button class= "btn-copiar" id="copiar" onclick="copiar()">copiar</button>'
}

function descriptografar() {
    var texto= textInput.value;
    
   var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g,"u");

   document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDescripto +'</textarea>' + '<button class= "btn-copiar" id="copiar" onclick="copiar()">copiar</button>'

}
function copiar(){
    var textoCop =document.getElementById('input-texto');

    textoCop.Select();
    document.execCommand('copy');
    alert("texto copiado");

}