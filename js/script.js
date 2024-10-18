//inserire input con prompt
//scrivere funzione isPalindorma che ritorna un bool
//stampare a video

let word = prompt("inserisci la parola");
let msg = isPalindrome(word);
console.log("la parola " + word + " è palindroma? " + msg);

function isPalindrome(text) {
  let isSame = true;
  for (let i = 0, textToLow = text.toLowerCase(); isSame && i <= Math.ceil(textToLow.length - 1) / 2; i++, isSame = text.charAt(i) !== text.charAt(textToLow.length - i - 1)) {
    if (text.charAt(i) !== text.charAt(textToLow.length - i - 1)) {
        isSame = false;
      }
  }
  return isSame;
}


const isPalindroma = s => s === s.split('').reverse().join('');

const isPalindromaStandard = function isPalindromaStandard(s) {
    return s === s.split('').reverse().join('');
}

//morracinese
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// Dichiariamo chi ha vinto.
let choice = prompt("pari o dispari");
let num = parseInt(prompt("numero da 1 a 5"));

let pcNum = randomIntBetween(1,5);





function randomIntBetween(min, max){
    const flagUno = isNum(max);
    const flagDue =isNum(min);

    if(flagUno && flagDue){
        const random = Math.floor(Math.random()*(max-min+1) +min);
        return random
    }else{
        return("non un numero")
    }
}
function isNum(n){
    if(typeof n !== 'number'){
        return false;
    }else{
        return true;
    }
}