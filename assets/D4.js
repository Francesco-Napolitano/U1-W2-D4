/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  return l1 * l2
}

console.log(area(2, 4))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (num1, num2) {
  if (num1 !== num2) {
    return num1 + num2
  } else {
    const sum = num1 + num2
    return sum * 3
  }
}

console.log('I due numeri sono diversi, perciò si sommano:', crazySum(2, 3))
console.log(
  'I due numeri sono uguali, perciò si sommano e si moltiplicano:',
  crazySum(2, 2)
)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numero_fisso = 19
const crazyDiff = function (num1) {
  if (num1 <= numero_fisso) {
    return num1 - numero_fisso
  } else {
    const diff = num1 - numero_fisso
    return diff * 3
  }
}

console.log('Il numero inserito è <= di 19:', crazyDiff(18))
console.log(
  'Il numero inserito è > di 19, quindi si moltiplica:',
  crazyDiff(20)
)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  if (n >= 20 && n <= 100) {
    return true
  } else {
    return false
  }
}

console.log('Non compreso: ', boundary(15))
console.log("E' compreso: ", boundary(47))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (str) {
  if (str === 'EPICODE') {
    return str
  } else {
    return 'EPICODE' + ' ' + str
  }
}

console.log('Stringa diversa:', epify('CIAO'))
console.log('Stringa uguale:', epify('EPICODE'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (numPositive) {
  if (numPositive % 3 === 0 || numPositive % 7 === 0) {
    return true
  } else {
    return false
  }
}

console.log("E' un multiplo di 7 o 3", check3and7(49))
console.log('Non è un multiplo di 7 o 3', check3and7(19))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (str) {
  let stringReversed = str.split('').reverse().join('')
  return stringReversed
}

console.log('Stringa invertita: ', reverseString('EPICODE'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (str) {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

console.log(upperFirst('ciao come va?'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (str) {
  const stringCutted = str.slice(1, -1)
  return stringCutted
}

console.log(cutString('DRAGONBALL'))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
  const randomNumber = []

  for (let i = 0; i < n; i++) {
    const randomN = Math.random() * 11
    randomNumber.push(Math.floor(randomN))
  }
  return randomNumber
}

console.log(giveMeRandom(3))
