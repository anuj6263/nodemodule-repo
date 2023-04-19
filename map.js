const cricketer = [
    {
        name: 'Anuj',
        Age: '19',
        proffesion: 'Chess',
    },
    {
        name: 'vivek',
        Age:'21',
        proffesion: 'Coaching',
    },
    {
        name: 'Aneesh',
        Age: '20',
        proffesion:'Officer'
    },
];

const newpeople = cricketer.map((item)=>{
    console.log(item)
})

const names = cricketer.map((person)=>`<h2>${person.name}</h2>`);
console.log(names)

const result = document.querySelector('#result')
result.innerHTML = names.join('')