// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine


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

const under25 = zucchine.filter((zucchine) => zucchine.lunghezza < 25)
console.log(under25);

let sumUnder25 = 0

const pesiUnder25 = under25.map(zucchina => {
    console.log(zucchina.peso);
    return zucchina.peso
});



for (let i = 0; i < pesiUnder25.length; i++) {
    sumUnder25 += Number(pesiUnder25[i]);

}


const others = zucchine.filter((zucchine) => zucchine.lunghezza >= 25)
console.log(others);

let sumOthers = 0

const pesiOthers = others.map(zucchina => {
    console.log(zucchina.peso);
    return zucchina.peso
});

console.log(pesiOthers);

for (let i = 0; i < pesiOthers.length; i++) {
    sumOthers += Number(pesiOthers[i]);

}
console.log('La prima somma è ' + sumUnder25);
console.log('La seconda somma è ' + sumOthers);

