function encriptar() {
  var texto = document.getElementById("inputtexto").value.toLowerCase();
  //i es para que afecte a tanto mayus como minus
  //g afecta a toda la linea
  //m afecta a multiples lineas
  var txtcifrado = texto.replace(/e/igm,"enter");
  var txtcifrado = txtcifrado.replace(/o/igm,"ober");
  var txtcifrado = txtcifrado.replace(/i/igm,"imes");
  var txtcifrado = txtcifrado.replace(/a/igm,"ai");
  var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
  document.getElementById("imDer").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("copiar-copiar").style.display = "show";
  document.getElementById("texto2").innerHTML = txtcifrado;
  document.getElementById("input-texto").innerHTML = " ";
  document.getElementById("copiar-copiar").style.display = "inherit";
}

function desencriptar() {
  var texto = document.getElementById("inputtexto").value.toLowerCase();
  var txtcifrado = texto.replace(/enter/igm,"e");
  var txtcifrado = txtcifrado.replace(/ober/igm,"o");
  var txtcifrado = txtcifrado.replace(/imes/igm,"i");
  var txtcifrado = txtcifrado.replace(/ai/igm,"a");
  var txtcifrado = txtcifrado.replace(/ufat/igm,"u");
  document.getElementById("imDer").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("copiar-copiar").style.display = "show";
  document.getElementById("texto2").innerHTML = txtcifrado;
  document.getElementById("input-texto").innerHTML = " ";
  document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
  var contenido = document.querySelector("#texto2");
  contenido.select();
  document.execCommand('copy');
  alert("Copied!");
}
