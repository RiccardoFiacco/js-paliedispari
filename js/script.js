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