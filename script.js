var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var textArea = document.querySelector(".area_texto")
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    var area_texto = recuperarTexto();
    if (validateText(area_texto)) {
    resultado.textContent = encriptarTexto(area_texto);
    textArea.value = "";
    resultado.style.backgroundImage = "none"
  }
}

function desencriptar(){
    var area_texto = recuperarTexto();
    if (validateText(area_texto)) {
    resultado.textContent = desencriptarTexto(area_texto);
    textArea.value = "";
  }
}

function recuperarTexto(){
    var area = document.querySelector(".area_texto");
    return area.value
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    let textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }

    }

    return textoFinal;
}

function validateText(text) {
  const accents = /[áéíóúÁÉÍÓÚ]/g;

  if (accents.test(text)) {
    alert(
      "No se aceptan acentos en el texto. Por favor, remueve los acentos antes de continuar."
    );
    return false;
  }

  return true;
}


let btnCopiar = document.querySelector(".btn-Copiar");
    btnCopiar.addEventListener("click", copiar = () => {
    let contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    alert("¡texto copiado con exito!")
})