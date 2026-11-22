const express = require('express')

const router = express.Router()

const stdController = require('../controller/controller')

router.get('/', stdController.getAllStudents)
router.get('/:id', stdController.getSingleStudent)
router.post('/', stdController.createStudent)
router.patch('/:id', stdController.updateStudent)
router.delete('/:id', stdController.removeStudent)


module.exports = router