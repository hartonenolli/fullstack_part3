const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    { id: 1, name: 'Arto Hellas', number: '040-1234567' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23234345' }
]

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

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(p => p.id !== id)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body
    console.log('Received body:', body);
    const generateId = () => {
        return randomID = Math.floor(Math.random() * 10000)
    }
    const newPerson = {
        id: generateId(),
        name: body.name,
        number: body.number
    }
    console.log('Adding new person:', newPerson);
    console.log('Current persons:', persons);

    persons = persons.concat(newPerson)
    response.json(newPerson)
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});