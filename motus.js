indexRaw = 0
maxIndexRaw = 5

var dictionary = ["BOUCHA", "BOUCHE", "BOUCLA", "BOUCLE", "BOUCOT", "DETTES", "DEUILS", "DEUSIO", "DEUSTS", "DEUTON", "DEUZIO", "ADHEREZ", "ADHESIF", "ADIANTE", "ADIPEUX", "ADIPOSE", "ADIPSIE", "RETINES", "RETINOL", "RETIQUE", "RETIRAI", "RETIRAS", "RETIRAT", "RETIREE", "PORTELONES", "PORTEMENTS", "PORTEMINES", "PORTERIONS", "PORTFOLIOS", "PORTILLONS", "PORTUAIRES", "PORTUGAISE", "POSASSIONS", "POSEMETRES", "POSERAIENT", "POSIDONIES", "POSITIONNA", "POSITIONNE", "POSITIVAIS", "POSITIVAIT", "POSITIVANT"]
//Sélectionne un mot au hasard dans la liste
var word = dictionary[Math.floor(Math.random()*dictionary.length)].toLowerCase();

console.log(word);
function startGame(){
    //Rempli les lignes avec le nombre de case nécessaire basé sur la longueur du mot
    for (var i = 0; i < 6; ++i) {
        var raw = document.getElementsByClassName("raw_"+i)[0];
        for (var j = 0; j < word.length; ++j) {
            const node = document.createElement("div");
            node.classList.add('letter');
            raw.appendChild(node);
        }
    }
}

function tryWord(){
    var raw = document.getElementsByClassName("raw_"+indexRaw)[0];
    var letters = raw.getElementsByClassName('letter');
    var inputWord = document.getElementById("word").value.toLowerCase();
    console.log(inputWord);

    //Vérifie que le mot saisi correspond à la bonne taille
    if (inputWord.length != word.length){
        document.getElementById("game_message").innerText = 'Le mot doit contenir ' + word.length + ' lettres';
        return false
    }
    else{
        document.getElementById("game_message").innerText = '';
    }

    //Vérifie chaque lettre

    for (var j = 0; j < letters.length; ++j) {
        letters[j].innerText=inputWord[j].toUpperCase();
        if (inputWord[j] === word[j]){
            letters[j].classList.add('found_letter');
        }
        else if (word.indexOf(inputWord[j]) > -1){
            letters[j].classList.add('contained_letter');

        }
        else{
            letters[j].classList.add('not_found_letter');
        } 
    }

    //Si le mot est deviné
    if (inputWord === word){
        document.getElementById("game_message").innerText = 'Bien joué !'
        document.getElementById("word").disabled = true;
        document.getElementById("btn_game").disabled = true;

        return false
    }
    //Si plus d'essai disponible
    if (indexRaw === maxIndexRaw){
        document.getElementById("game_message").innerText = 'Perdu ! Le mot était ' + word
        document.getElementById("word").disabled = true;
        document.getElementById("btn_game").disabled = true;
        return false
    }

    indexRaw+=1;
}