let start = document.getElementById("start");
let historia = document.getElementById("historia");
let przyciski = document.querySelector(".przyciski");
let opcje2 = document.querySelector(".opcje2");
let tablicawynikow = document.querySelector(".tablicawynikow");
let wybor1 = document.getElementById("wybor1");
let wybor2 = document.getElementById("wybor2");
let wybor3 = document.getElementById("wybor3");
let wybor4 = document.getElementById("wybor4");
let obecnepytanie ;
let wybor=[wybor1,wybor2,wybor3,wybor4];
start.addEventListener("click", rozpoczecie);
historia.addEventListener("click", wyniki);
let pytanie = document.getElementById("pytanie");
let pytania=["W którym roku polska odzyskała niepodległość",1918,1917,1920,1921,
    "W którym roku polacy zajęli Moskwe",1602,1607,1610,1615,
    "W którym roku miała miejsce Bitwa pod Wiedniem",1658,1690,1653,1683,
    "W którym roku powstała Rzeczpospolita obojga narodów",1560,1584,1558,1569];
let poprawne=[1918,1610,1683,1569];
let wstecz = document.getElementById("previous");
let dalej = document.getElementById("next");
wstecz.addEventListener("click", poprzednie);
dalej.addEventListener("click", nastepne);
let opcja1 = document.getElementById("przycisk1");
let opcja2 = document.getElementById("przycisk2");
let opcja3 = document.getElementById("przycisk3");
let opcja4 = document.getElementById("przycisk4");
opcja1.addEventListener("click",wybierzodpowiedz);
opcja2.addEventListener("click",wybierzodpowiedz);
opcja3.addEventListener("click",wybierzodpowiedz);
opcja4.addEventListener("click",wybierzodpowiedz);
let punkty=0;
function rozpoczecie(){
    pytanie.innerHTML=pytania[0];
    for(let i=0;i<4;i++){
        wybor[i].innerHTML=pytania[i+1];
    }
    obecnepytanie=0;
    przyciski.style.display = "block";
    opcje2.style.display = "block";
    pytanie.style.display = "block";
    if(tablicawynikow.style.display = "block"){
        tablicawynikow.style.display = "none";
    }
}
function wyniki() {
    if(przyciski.style.display = "block"){
        przyciski.style.display = "none";
        opcje2.style.display = "none";
        pytanie.style.display = "none";
        tablicawynikow.style.display = "block";
    }
    tablicawynikow.innerHTML=punkty;
}
function poprzednie() {
    if(obecnepytanie === 0) {
        pytanie.innerHTML = "Nie ma wcześniejszych pytań";
        obecnepytanie=0;
        for(let i=0;i<4;i++){
            wybor[i].innerHTML = "";
        }
    }
    else {
        obecnepytanie = obecnepytanie - 5;
        pytanie.innerHTML = pytania[obecnepytanie];
        for(let i=0;i<4;i++){
            wybor[i].innerHTML=pytania[obecnepytanie+i+1];
        }
    }
}
function nastepne() {
    if(obecnepytanie === (pytania.length-5)) {
        pytanie.innerHTML = "Nie ma więcej pytań";
        obecnepytanie=(pytania.length-5);
        for(let i=0;i<4;i++){
            wybor[i].innerHTML = "";
        }
    }
    else {
        obecnepytanie=obecnepytanie+5;
        pytanie.innerHTML = pytania[obecnepytanie];
        for(let i=0;i<4;i++) {
            wybor[i].innerHTML = pytania[obecnepytanie+i+1];
        }
    }
}
function wybierzodpowiedz() {
    if(obecnepytanie === 0){
        if(opcja1.innerHTML === poprawne[0]){
            punkty++;
        }
        else if (opcja2.innerHTML === poprawne[0]) {
            punkty++;
        }
        else if (opcja3.innerHTML === poprawne[0]) {
            punkty++;
        }
        else if (opcja4.innerHTML === poprawne[0]) {
            punkty++;
        }
        alert("Poprawna odpowiedź to : " + poprawne[0]);
    }
else{
    if(opcja1.innerHTML === poprawne[obecnepytanie/5]){
        punkty++;
    }
    else if (opcja2.innerHTML === poprawne[obecnepytanie/5]) {
        punkty++;
    }
    else if (opcja3.innerHTML === poprawne[obecnepytanie/5]) {
        punkty++;
    }
    else if (opcja4.innerHTML === poprawne[obecnepytanie/5]) {
        punkty++;
    }
    alert("Poprawna odpowiedź to : " + poprawne[obecnepytanie/5]);
}
}

