//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna
// varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine


const zucchine = [
    {
        varietà: 'nera',
        peso: '1.2',
        lunghezza: '19'

    },
    {
        varietà: 'romanesca',
        peso: '0.8',
        lunghezza: '25'

    },
    {
        varietà: 'ortolana',
        peso: '1.150',
        lunghezza: '32'

    },
    {
        varietà: 'lunga',
        peso: '1.250',
        lunghezza: '58'

    },
    {
        varietà: 'siciliana',
        peso: '0.950',
        lunghezza: '34'

    },
    {
        varietà: 'striata',
        peso: '0.680',
        lunghezza: '18'

    },
    {
        varietà: 'bianca',
        peso: '0.740',
        lunghezza: '20'

    },
    {
        varietà: 'rigata',
        peso: '0.895',
        lunghezza: '26'

    },
    {
        varietà: 'tonda',
        peso: '0.570',
        lunghezza: '28'

    },
    {
        varietà: 'trombetta',
        peso: '0.870',
        lunghezza: '45'

    },

]

let sum = 0

const pesi = zucchine.map(zucchina => {
    console.log(zucchina.peso);
    return zucchina.peso
});

console.log(pesi);

for (let i = 0; i < pesi.length; i++) {
    sum += Number(pesi[i]);

    console.log(sum);
}
let result = 'Il peso totale è ' + sum + ' Kg'
console.log(result);