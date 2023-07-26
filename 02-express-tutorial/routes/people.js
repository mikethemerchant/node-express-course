const express = require('express')
const router = express.Router()

const {getPeople,createPeople,createPostmanPeople,updatePeople,deletePeople} = require('../controllers/people')

// router.get('/', getPeople)
// router.post('/', createPeople)
// router.post('/postman', createPostmanPeople)
// router.put('/:id', updatePeople)
// router.delete('/:id', deletePeople)

router.route('/').get(getPeople).post(createPeople)
router.route('/postman').post(createPostmanPeople)
router.route('/:id').put(updatePeople).delete(deletePeople)

module.exports = router