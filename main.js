let formulaire = document.querySelector('#formulaire');
let i = 1;

function calculPrixHotel(passAnnuel, periode, hotel, personne, chambre) {
    
    if (hotel == "santafe" && periode == "tbs") {
        var prixHotel = 109;
    } 
    else if (hotel == "santafe" && periode == "bs") {
        var prixHotel = 214;
    } 
    else if (hotel == "santafe" && periode == "normal") {
        var prixHotel = 283;
    } 
    else if (hotel == "santafe" && periode == "modere") {
        var prixHotel = 343;
    } 
    else if (hotel == "santafe" && periode == "haute") {
        var prixHotel = 369;
    }

    if (hotel == "cheyenne" && periode == "tbs") {
        var prixHotel = 147;
    } 
    else if (hotel == "cheyenne" && periode == "bs") {
        var prixHotel = 260;
    } 
    else if (hotel == "cheyenne" && periode == "normal") {
        var prixHotel = 333;
    } 
    else if (hotel == "cheyenne" && periode == "modere") {
        var prixHotel = 396;
    } 
    else if (hotel == "cheyenne" && periode == "haute") {
        var prixHotel = 424;
    }
    
    if (hotel == "sequoialodge" && periode == "tbs") {
        var prixHotel = 193;
    } 
    else if (hotel == "sequoialodge" && periode == "bs") {
        var prixHotel = 311;
    } 
    else if (hotel == "sequoialodge" && periode == "normal") {
        var prixHotel = 410;
    } 
    else if (hotel == "sequoialodge" && periode == "modere") {
        var prixHotel = 461;
    } 
    else if (hotel == "sequoialodge" && periode == "haute") {
        var prixHotel = 497;
    }

    if (hotel == "goldenforest" && periode == "tbs") {
        var prixHotel = 276;
    } 
    else if (hotel == "goldenforest" && periode == "bs") {
        var prixHotel = 449;
    } 
    else if (hotel == "goldenforest" && periode == "normal") {
        var prixHotel = 529;
    } 
    else if (hotel == "goldenforest" && periode == "modere") {
        var prixHotel = 594;
    } 
    else if (hotel == "goldenforest" && periode == "haute") {
        var prixHotel = 638;
    }

    if (hotel == "newport" && periode == "tbs") {
        var prixHotel = 267;
    } 
    else if (hotel == "newport" && periode == "bs") {
        var prixHotel = 348;
    } 
    else if (hotel == "newport" && periode == "normal") {
        var prixHotel = 502;
    } 
    else if (hotel == "newport" && periode == "modere") {
        var prixHotel = 544;
    } 
    else if (hotel == "newport" && periode == "haute") {
        var prixHotel = 619;
    }

    if (hotel == "compass" && periode == "tbs") {
        var prixHotel = 448;
    } 
    else if (hotel == "compass" && periode == "bs") {
        var prixHotel = 532;
    } 
    else if (hotel == "compass" && periode == "normal") {
        var prixHotel = 674;
    } 
    else if (hotel == "compass" && periode == "modere") {
        var prixHotel = 715;
    } 
    else if (hotel == "compass" && periode == "haute") {
        var prixHotel = 808;
    }

    if (hotel == "dlh" && periode == "tbs") {
        var prixHotel = 620;
    } 
    else if (hotel == "dlh" && periode == "bs") {
        var prixHotel = 760;
    } 
    else if (hotel == "dlh" && periode == "normal") {
        var prixHotel = 988;
    } 
    else if (hotel == "dlh" && periode == "modere") {
        var prixHotel = 1099;
    } 
    else if (hotel == "dlh" && periode == "haute") {
        var prixHotel = 1249;
    }
    
    if (hotel == "santafe") { var taxeSejour = 1; }

    if (hotel == "cheyenne") { var taxeSejour = 1; }

    if (hotel == "sequoialodge") { var taxeSejour = 2; }

    if (hotel == "goldenforest") { var taxeSejour = 2; }

    if (hotel == "newport") { var taxeSejour = 2; }

    if (hotel == "compass") { var taxeSejour = 2; }

    if (hotel == "dlh") { var taxeSejour = 4; }

    if (passAnnuel == "magicPlus") {
        var prixHotelFinal = ((prixHotel - (prixHotel * 40 / 100)) * chambre) + (taxeSejour * personne);
    } 
    else if (passAnnuel == "infinity") {
        var prixHotelFinal = ((prixHotel / 2) * chambre) + (taxeSejour * personne);
    }

    return prixHotelFinal;

}

function calculerPension(hotel, pension, personne) {

    if (pension == "aucune") {
        var prixPension = 0;
    }

    if (pension == "pensionplus" && hotel == "goldenforest") {
        var prixPension = 66;
    } 
    else if (pension == "pensionplus" && hotel == "compass"){
        var prixPension = 66;
    } 
    else if (pension == "pensionplus") {
        var prixPension = 77;
    }

    if (pension == "pensionpremium" && hotel == "goldenforest") {
        var prixPension = 114;
    } 
    else if (pension == "pensionpremium" && hotel == "compass"){
        var prixPension = 114;
    } 
    else if (pension == "pensionpremium") {
        var prixPension = 129;
    }

    return prixPensionFinal = prixPension * personne;

}

function calculBilletSupp(billet, passAnnuel) {
    
    if (passAnnuel == "magicPlus" && billet != "0") {
        var prixBillet = billet * 45;
    } 
    else if (passAnnuel == "infinity" && billet != "0"){
        var prixBillet = billet * 39;
    } 
    else if (billet == "0") {
        var prixBillet = 0;
    }

    return prixBillet;
    
}

function calculerEvent(event, personne, passAnnuel) {
    
    if (event == "electroland" && passAnnuel == "infinity") {
        return (89 - (89 * 15 / 100)) * personne;
    } 
    else if (event == "electroland" && passAnnuel == "magicPlus") {
        return (89 - (89 * 10 / 100)) * personne;
    }
    else if (event == "halloween" && passAnnuel == "infinity") {
        return (89 - (79 * 10 / 100)) * personne;
    }
    else if (event == "halloween" && passAnnuel == "magicPlus") {
        return (89 - (79 * 10 / 100)) * personne;
    }
    else if (event == "aucun") {
        return 0;
    }

};

function affichage(prixHotelFinal, prixPensionFinal, prixBillet, prixEvent, hotel, pension, billet, event) {
  
    let total = prixHotelFinal + prixPensionFinal + prixBillet + prixEvent;
    let totalSansBillet = prixHotelFinal + prixPensionFinal + prixEvent;
    let apport = ((total - prixBillet) * 15) / 100;

    if (hotel == "santafe") {
        var nomHotel = "Hôtel Santa Fe";
    }
    else if (hotel == "cheyenne") {
        var nomHotel = "Hôtel Cheyenne";
    }
    else if (hotel == "sequoialodge") {
        var nomHotel = "Hôtel Sequoia Lodge";
    }
    else if (hotel == "goldenforest") {
        var nomHotel = "Hôtel Sequoia Lodge: Golden Forest";
    }
    else if (hotel == "newport") {
        var nomHotel = "Hôtel Newport Bay Club"
    }
    else if (hotel == "compass") {
        var nomHotel = "Hôtel Newport Bay Club: Compass Club"
    }
    else if (hotel == "dlh") {
        var nomHotel = "Disneyland Hôtel"
    }

    if (pension == "pensionpremium") {
        var nomPension = "Pension Complète Premium" 
    }
    else if (pension == "pensionplus") {
        var nomPension = "Pension Complète Plus"
    } 

    let instruction = document.createElement('div');
      instruction.innerHTML = '<div class="card cartd"><h5 class="card-header">Résultat:</h5><div class="card-body"><h5 class="card-title">Séjour Disney ' 
                            + i
                            + ' : ' 
                            + nomHotel
                            +'</h5><p class="card-text">Hôtel : ' 
                            + prixHotelFinal 
                            + ' euros (Taxe de séjour incluse).<br></p><p class="card-text">' 
                            + (pension  != "aucune" ? nomPension + " : " : "")
                            + (pension  != "aucune" ? prixPensionFinal + " euros.<br>" : "")
                            + '</p><p class="card-text">' 
                            + (billet  != "0" ? "Billet Privilège : " + prixBillet + " euros.<br>" : "")
                            + (event != "aucun" ? '<p class="card-text"> Supplément Event: '  + prixEvent + " euros.<br></p>" : "")
                            + (event != "aucun" ? '<p class="card-text">Total : ' + totalSansBillet + " euros (supplément Event inclus).<br></p>" : '<p class="card-text">Total Général : ' + totalSansBillet + ' euros.<br></p>')
                            + (billet  != "0" ? '</p><p class="card-text"> Total avec Billet : ' + total + " euros.<br></p>" : "")
                            +'<p class="card-text"> Apport de 15% : ' 
                            + apport 
                            + ' euros.</p></div></div>';

    i++;

    document.querySelector('#instructions').prepend(instruction);
}


formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    let passAnnuel  = document.querySelector('#passAnnuel').value;
    let periode     = document.querySelector('#periode').value;
    let hotel       = document.querySelector('#hotel').value;
    let pension     = document.querySelector('#pension').value;
    let billet      = document.querySelector('#billetP').value;
    let personne    = document.querySelector('#personne').value;
    let event       = document.querySelector('#event').value;
    let chambre     = document.querySelector('#chambre').value;

    let prixHotel   = calculPrixHotel(passAnnuel, periode, hotel, personne, chambre);
    let prixPension = calculerPension(hotel, pension, personne);
    let prixBillet  = calculBilletSupp(billet, passAnnuel);
    let prixEvent   = calculerEvent(event, personne, passAnnuel);

    affichage(prixHotel, prixPension, prixBillet, prixEvent, hotel, pension, billet, event);

});