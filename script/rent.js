automobili=[
    {ime:'Audi A5', cenaSata:1.3},
    {ime:'BMW 720li', cenaSata:1.7},
    {ime:'BMW i8', cenaSata:1.80},
    {ime:'BMW X3', cenaSata:1.35},
    {ime:'Fiat 500', cenaSata:0.8},
    {ime:'Land Rover Discovery', cenaSata:1.70},
    {ime:'Mercedes Benz GL320', cenaSata:1.55},
    {ime:'Mercedes Benz SL Roadster', cenaSata:1.75},
    {ime:'Nissan Qashqai', cenaSata:1.2},
    {ime:'Opel Astra', cenaSata:1.05},
    {ime:'Opel Insignia', cenaSata:1.25},
    {ime:'Peugeot 308', cenaSata:1.1},
    {ime:'Porsche Macan', cenaSata:1.60},
    {ime:'Renault Clio', cenaSata:0.9},
    {ime:'Škoda Kodiaq', cenaSata:1.35},
    {ime:'Škoda Superb', cenaSata:1.3},
    {ime:'Toyota Auris', cenaSata:0.90},
    {ime:'Toyota Prius', cenaSata:1.10},
    {ime:'Volkswagen Polo', cenaSata:0.95},
    {ime:'Volkswagen Passat', cenaSata:1.35},

    
    
]

const rezultatContainer = document.getElementById('rezultat-container');
const tabela=document.getElementById('tabela-rezultata');
const mestoPreuzimanja = document.querySelector('select#mesto-preuzimanja');
const datumPreuzimanja = document.getElementById('datum-preuzimanja');
const vremePreuzimanja = document.getElementById('vreme-preuzimanja');
const mestoVracanja = document.querySelector('select#mesto-vracanja');
const datumVracanja = document.getElementById('datum-vracanja');
const vremeVracanja = document.getElementById('vreme-vracanja');

var tabelaPrikazana=false;

function pronadjiVozilo(brojSati){

    automobili=automobili.sort(() => Math.random() - 0.5);
   
    tabela.innerHTML='<div id="zaglavlje" class="red">'+
    '<div class="prva-kolona">Automobil</div>'+
    '<div class="druga-kolona">Broj sati</div>'+
    '<div class="treca-kolona">Cena</div>'+
    '</div>';
    
    rezultatContainer.style.display="flex";
    automobili.forEach(automobil => {
        el = document.createElement('div');
        el.classList.add('red');
        el.innerHTML=
        '<div class="prva-kolona">'+automobil.ime+'</div>'+
        '<div class="druga-kolona">'+brojSati+'</div>'+
        '<div class="treca-kolona">'+Math.round(automobil.cenaSata*brojSati*100)/100+'€</div>';     
        tabela.insertAdjacentElement('beforeend',el);
    });

    location.replace('#tabela-rezultata');
}

function vratiBrojSati(){
    if(mestoPreuzimanja.querySelector(':checked').innerText=="Izaberi lokaciju"
    || mestoVracanja.querySelector(':checked').innerText=="Izaberi lokaciju"){
        alert('Molimo vas izaberite lokaciju iznajmljivanja vozila');
        return;
    }

    date1=new Date(datumVracanja.value +" "+vremeVracanja.querySelector(":checked").innerText+":00");
    date2=new Date(datumPreuzimanja.value +" "+vremePreuzimanja.querySelector(":checked").innerText+":00");
    if(date1=='Invalid Date' || date2=='Invalid Date'){
        alert('Molimo vas izaberite datum i vreme iznajmljivanja');
        return;
    }
    danasnjiDatum = new Date();
    if(danasnjiDatum > date2 || danasnjiDatum > date1){
        alert('Ne mozete izabrati datum u proslosti');
        return;
    }
    if(date1 <= date2){
        alert('Datum i vreme vracanja moraju biti nakon datuma i vremena preuzimanja!');
        return;
    }

    var sati = (date1 - date2) / 36e5;
    pronadjiVozilo(sati);
}


