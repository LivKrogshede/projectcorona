
var i = 0; // i er sat til = 0, da den skal starte på første billede
var billeder = []; // billede-array
var time = 1000; //antal millisekunder før næste billede/slide. 1000 millisekunder = 1 sekund.

// billeder og hvilket nr de er tildelt og hvor deres lokation er.
billeder[0] = 'https://picsum.photos/id/1003/1181/1772';
billeder[1] = 'https://picsum.photos/id/1004/1181/1772';
billeder[2] = 'https://picsum.photos/id/1005/1181/1772';
billeder[3] = 'https://picsum.photos/id/1006/1181/1772';

function skiftBillede(){    //funktionen der får billedet til at skifte
  document.getElementById('nytbillede').src = billeder[i]; //finder det nye billede vha id'et kaldt 'nytbilledet' i HTML'en

  if (i < billeder.length - 1){ //tjekker om index er under det sidste index. Hvis ikke tilføjer den 1(i++), til indexet.
i++;
}

else {
  i = 0;  //else: hvis den er på det sidste index, laver den indexet om til 0 og hvad 0-indexet indeholder.
}

setTimeout("skiftBillede()", time); //eksekverer funktionen ift hvad time-variablen er sat til.
}

window.onload = skiftBillede; //Eksekverer funktionen når siden loader.

//lavet med inspiration fra https://www.youtube.com/watch?v=4YQ4svkETS0&t=201s&ab_channel=TraversyMedia //
//Note: img name bruges ikke længere, derfor er dette lavet med getElementById //
//Hvis nogle ved, hvordan man laver dette med en img-container-DIV, hvor billederne er I, må I gerne sige til :)
