let nombre = prompt ("Hola! ¿Cómo te llamas?");
alert ("Bienvenido" + " " + nombre + "!" + " " + "Necesito saber si sos población de Riesgo Covid-19")
let edad = parseInt(prompt("¿Qué edad tenés?"));
if(edad < 65){
    alert("Te felicito, no sos población de riesgo pero cuidate!")
}else if(edad >= 65){
    alert("Sos población de riesgo! Quedate en casa")
}else{
    alert("No ingresaste tu edad")
}