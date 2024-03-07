// Scrivi una funzione che accetti una stringa come argomento
//e la ritorni girata(es.Ciao -> oaiC)

function reverseWord(word) {

    var split = word.split("");

    var reverse = split.reverse();

    var join = reverse.join("");
    return join;
}
let word = 'Ciao'
console.log(reverseWord(word));
