let { people } = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people })  
}

const createPeople = (req, res) => {
    const { name } = req.body
    if(!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value' })
    } 
    res.status(201).json({ success: true, person: name })
}

const createPostmanPeople = (req, res) => {
    const { name } = req.body
    if(!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
}

const updatePeople = (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))

    if(!person) {
        return res
            .status(400)
            .json({ success: false, msg: `No person with ID:${id}`})
    } 
    const newPeople = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({ success: true, data: newPeople })
}

const deletePeople = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))

    if(!person) {
        return res
            .status(400)
            .json({ success: false, msg: `No person with ID:${id}`})
    } 
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({ success: true, data: newPeople })
}

module.exports = {getPeople,createPeople,createPostmanPeople,updatePeople,deletePeople}