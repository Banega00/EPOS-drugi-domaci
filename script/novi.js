$(function(){
    $('#filter-natpis').click(function(){
        $('#filter-opcije').toggle(500);
        $(this).find('img').toggleClass('flip-hor');
    })
    
    $('.jos-podataka').click(function(){
        $(this.parentNode).find('.sakriveni-podaci').fadeToggle();
        $(this).find('img').toggleClass('flip-hor');
    })
})


//Automobili
const automobili = document.querySelectorAll('.automobil-kartica');
const prikazaniAutomobili = [].slice.call(automobili);
const nemaRezultataDiv = document.querySelector("#nemaRezultataDiv");

//Elementi filtera
const selectMarka = document.querySelector('#select-marka');
const selectKaroserija = document.querySelector('#select-karoserija');
const selectGorivo = document.querySelector('#select-gorivo');
const cenaInputOd = document.querySelector('#cenaInputOd');
const cenaInputDo = document.querySelector('#cenaInputDo');

function filter(){
    for(automobil of automobili){
        zadovoljavaCenuVar = zadovoljavaCenu(automobil);
        zadovoljavaGorivoVar = zadovoljavaGorivo(automobil);
        zadovoljavaMarkuVar = zadovoljavaMarku(automobil);
        zadovoljavaKaroserijuVar = zadovoljavaKaroseriju(automobil);
        // console.log(zadovoljavaCenuVar);
        // console.log(zadovoljavaGorivoVar);
        // console.log(zadovoljavaMarkuVar);
        // console.log(zadovoljavaKaroserijuVar);
        if(
            !zadovoljavaCenuVar||
            !zadovoljavaGorivoVar ||
            !zadovoljavaMarkuVar ||
            !zadovoljavaKaroserijuVar){
            sakrijAuto(automobil);
        }else{
            prikaziAuto(automobil);
        }
        proveriRezultat();
    }
}

function sakrijAuto(auto){
    auto.style.display="none";
    izbaciAutoIzNiza(auto);
}
function prikaziAuto(auto){
    if(prikazaniAutomobili.indexOf(auto)==-1){
        auto.style.display="block"
        prikazaniAutomobili.push(auto);
    }
}
function izbaciAutoIzNiza(auto){
    const index = prikazaniAutomobili.indexOf(auto);
    if (index > -1) {
        prikazaniAutomobili.splice(index, 1);
    }
}
//Funkcija koja prikazuje da nema rezultata ukoliko je
//niz prikazanih automobila 0
function proveriRezultat(){
    if(prikazaniAutomobili.length == 0){
        nemaRezultataDiv.style.display='block';
    }else{
        nemaRezultataDiv.style.display='none';
    }
}

function zadovoljavaCenu(auto){
    cenaOd = cenaInputOd.value;
    cenaDo = cenaInputDo.value;
    cena = parseInt(auto.getAttribute('data-cena'));
    if(cenaOd && cenaDo){
        if(cenaOd <= cena && cena <= cenaDo){
            return true;
        }else{
            return false;
        }
    }else if(cenaOd && !cenaDo){
        if(cenaOd <= cena){
            return true;
        }else{
            return false;
        }
    }else if(!cenaOd && cenaDo){
        if(cena <= cenaDo){
            return true;
        }else{
            return false
        }
    }else{
        return true;
    }   
}

function getSelectedValue(select){
    return select.querySelector(':checked').innerText.trim();
}

function zadovoljavaGorivo(auto){
    trazenoGorivo = getSelectedValue(selectGorivo);
    if(trazenoGorivo=='Sve')return true;
    gorivo = auto.getAttribute('data-gorivo');
    if(gorivo==trazenoGorivo)return true;
    return false;
}

function zadovoljavaMarku(auto){
    trazenaMarka = getSelectedValue(selectMarka);
    if(trazenaMarka=='Sve')return true;
    marka = auto.getAttribute('data-marka');
    if(marka==trazenaMarka)return true;
    return false;
}

function zadovoljavaKaroseriju(auto){
    trazenaKaroserija = getSelectedValue(selectKaroserija);
    if(trazenaKaroserija =='Sve')return true;
    karoserija = auto.getAttribute('data-karoserija');
    if(karoserija==trazenaKaroserija)return true;
    return false;
}