const ime = document.getElementById("ime");
const email = document.getElementById("email");
const text = document.getElementById("pitanje")
function posaljiPitanje(event){
    event.preventDefault();
    if(ime.value=="" || ime.value.length<3){
        alert('Morate uneti vase ime!');
        return;
    }
    if(email.value=="" || email.value.length<3){
        alert('Molimo vas unesite ispravnu email adresu!');
        return;
    }
    if(text.value=="" || text.value.length<3){
        alert('Ne možete poslati prazno pitanje');
        return;
    }

    ime.value="";
    email.value="";
    text.value="";
    alert("Hvala na postavljenom pitanju, potrudicemo se da vam odgovorimo što je brže moguće");
}