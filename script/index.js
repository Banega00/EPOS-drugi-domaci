const ime = document.getElementById("ime");
const email = document.getElementById("email");
const text = document.getElementById("pitanje")
function posaljiPitanje(){
    ime.value="";
    email.value="";
    text.value="";
    alert("Hvala na postavljenom pitanju, potrudicemo se da vam odgovorimo što je brže moguće");
}