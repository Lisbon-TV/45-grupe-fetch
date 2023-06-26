console.log('START');

const response = fetch('http://localhost:4512/data/marks.json')
    .then((res) => res.json())
    .then((data) => { console.log(data) });

console.log(response);

console.log('END');