const express = require('express')
const app = express()

let persons = [
  { name: 'Arto Hellas', number: '040-1234567' },
  { name: 'Ada Lovelace', number: '39-44-5323523' },
  { name: 'Dan Abramov', number: '12-43-234234' },
  { name: 'Mary Poppendieck', number: '39-23234235' }
];

app.get('/', (request, response) => {
    response.send('<h1>Puhelinluettelo!</h1>')
  })

app.get('/info', (request, response) => {
    const info = `<p>Phonebook has info for ${persons.length} people</p>`
    const date = `<p>${new Date()}</p>`
    response.send(info + date)
})

app.get('/api/persons', (request, response) => {
    response.json(persons);
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});