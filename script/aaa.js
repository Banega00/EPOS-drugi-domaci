function filter(tip_filtera,izbor){
    
    switch(tip_filtera){
        case 'marka':
            filtrirajMarku(getOptionValue(izbor));
            break;
        case 'karoserija':
            filtrirajKaroseriju(getOptionValue(izbor));
            break;
        case 'gorivo':
            filtrirajGorivo(getOptionValue(izbor));
            break;
        case 'cena':
            break;
    }
    
    console.log(prikazaniAutomobili);
}

function filtrirajMarku(marka){
    if(marka=="Sve"){
        for(automobil of automobili){
            prikaziAuto(automobil);
            proveriRezultat();
        }
    }else{
        for(automobil of automobili){
            if(automobil.getAttribute('data-marka')==marka){
                prikaziAuto(automobil);
                proveriRezultat();
            }else{
                sakrijAuto(automobil);
                proveriRezultat();
            }
        }
    }
}

function filtrirajKaroseriju(karoserija){
    if(karoserija=="Sve"){
        for(automobil of automobili){
            prikaziAuto(automobil);
            proveriRezultat();
        }
    }else{
        for(automobil of automobili){
            if(automobil.getAttribute('data-karoserija')==karoserija){
                prikaziAuto(automobil);
                proveriRezultat();
            }else{
                sakrijAuto(automobil);
                proveriRezultat();
            }
        }
    }
}

function filtrirajGorivo(gorivo){
    if(gorivo=="Sve"){
        for(automobil of automobili){
            prikaziAuto(automobil);
            proveriRezultat();
        }
    }else{
        for(automobil of automobili){
            if(automobil.getAttribute('data-gorivo')==gorivo){
                prikaziAuto(automobil);
            }else{
                sakrijAuto(automobil);
            }
            proveriRezultat();
        }
    }
}

const cenaInputOd = document.querySelector('#cenaInputOd');
const cenaInputDo = document.querySelector('#cenaInputDo');

function filterCena(){
    cenaOd = cenaInputOd.value;
    cenaDo = cenaInputDo.value;
    for(automobil of automobili){
        cena = parseInt(automobil.getAttribute('data-cena'));
        if(cenaOd && cenaDo){
            if(cenaOd <= cena && cena <= cenaDo){
                prikaziAuto(automobil);
            }else{
                sakrijAuto(automobil);
            }
        }else if(cenaOd && !cenaDo){
            if(cenaOd <= cena){
                prikaziAuto(automobil);
            }else{
                sakrijAuto(automobil);
            }
        }else if(!cenaOd && cenaDo){
            if(cena <= cenaDo){
                prikaziAuto(automobil);
            }else{
                sakrijAuto(automobil);
            }
        }else{
            prikaziAuto(automobil);
        }
        proveriRezultat();
    }
}


function getOptionValue(value){
    return value.querySelector(':checked').innerText.trim();
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

