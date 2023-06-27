console.log('START');

function average(list) {
    let sum = 0;

    for (const item of list) {
        sum += item;
    }

    return sum / list.length;
}

// use when posed multi requests from the server.. works better!

const github = 'https://raw.githubusercontent.com/front-end-by-rimantas/45-grupe-fetch/master/data/marks.json';
const local = 'http://localhost:4512/data/marks.json';
const localError = 'http://localhost:4512/data/random.json';


// by use of arrow function; here: deploy by .. next line for visibility!
// response and .then, and catch - a must!;
// finally () here is optional.. 
const response = fetch(local)     // promise pending ..
    .then((res) => res.json())    // promise pending...
    .then((data) => {
        const marksAverage = average(data.marks);
        console.log('Studento vidurkis:', marksAverage);
    })
    .catch(err => console.error('ERROR: kazkas blogai su uzklausa...', err))
    .finally(() => {
        console.log('Ir cia paskutinis fetch zingsnis...');
    });

console.log(response);

console.log('END');