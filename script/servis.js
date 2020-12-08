function zakaziKonacno(){
    alert("Uspesno ste zakazali servis!")
}


function zakazi(i){
    location.replace('#forma');
    document.querySelector('#ime').focus();
    document.querySelector('select option:nth-child('+i+')').setAttribute('selected','selected');
}