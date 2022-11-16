const nameLista = ["pippo", "PLUTO", "Paperino"]

const nuovaLista = nameLista.map(function (el){
    let nuovaStringa = el.toLowerCase().split();

    nuovaStringa[0] = nuovaStringa[0].toUpperCase();

    return nuovaStringa.join("")
})

