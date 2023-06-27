console.log('START');

// function calls for mean of marks!

function average(list) {
    let sum = 0;

    for (const item of list) {  // each mark from the array
        sum += item;  // sum of toal marks 
    }

    return sum / list.length;   // some of marks devided by the total number of marks in the array
}

const github = 'https://raw.githubusercontent.com/front-end-by-rimantas/45-grupe-fetch/master/data/marks.json';
// external location
const local = 'http://localhost:4512/data/marks.json';        // local - pas mane
const localError = 'http://localhost:4512/data/random.json';  // random failas don't exist!

// butinai turi buti try and catch...

try {
    const response = await fetch(localError);  // promise pending
    const data = await response.json();        // promise pending 
    const marksAverage = average(data.marks);  // toliau atliekam logika, kuri reikalinga

    console.log(response);
    console.log(data);
    console.log('Studento vidurkis:', marksAverage);
} catch (err) {
    console.log('ERROR: kazkas blogai...');   // jei error is caught, cia kodas ir sustos condoleje tik su error message
    console.warn(err);
} finally {
    console.log('Ir cia paskutinis fetch-finally zingsnis...');  // ne visada butinas!
}

console.log('END');