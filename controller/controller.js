const data = require('../data/data')

//get allstudents

const getAllStudents = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            msg: 'Students data fetched successfully',
            data: data
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: 'server error',
            error: err.message
        })
    }
}

//get Single student

const getSingleStudent = (req, res) => {
    try {
        let id = req.params.id

        let obj = data.find(e => e.id === id)

        if (!obj) {
            return res.status(404).json({
                success: false,
                msg: 'student data not found'
            })
        }

        res.status(200).json({
            success: true,
            msg: 'student data fetched successfully',
            data: obj
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: 'server error',
            error: err.message
        })
    }

}

//create New student

const createStudent = (req, res) => {
    try {
        let body = req.body
        if (!body.fname || !body.lname || !body.email || !body.contact) {
            return res.status(400).json({
                success: false,
                msg: 'fname lname email contact are required fields'
            })
        }

        let newStudent = {
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            contact: req.body.contact,
            createdAt: req.body.createdAt,
            updatedAt: null,
            id: Date.now().toString()
        }

        data.push(newStudent)

        res.status(200).json({
            success: true,
            msg: 'new student created successfully',
            data: newStudent
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: 'server error',
            error: err.message
        })
    }

}
//updateStudent

const updateStudent = (req, res) => {
    try {
        
        let updateId = req.params.id
        let getIndex = data.findIndex(e => e.id === updateId)

        if(getIndex === -1){
            return res.status(404).json({
                success : false,
                msg : 'student obj not found'
            })
        }
        let updatedStd = {
            ...req.body,
            updatedAt: Date.now().toString(),
            id : updateId
        }

        data[getIndex] = updatedStd

        res.status(200).json({
            success : true,
            msg : `student with name ${updatedStd.fname} updated successfully`,
            data : updatedStd
        })

    } catch (err) {
        res.status(500).json({
            success : false,
            msg : 'server error',
            error : err.message
        })
    }
}

//removeStudent

const removeStudent = (req, res) =>{
    try{
        let id = req.params.id
        let getIndex = data.findIndex(e => e.id === id)

        if(getIndex === -1){
            return res.status(404).json({
                success :false,
                msg : 'student not found'
            })
        }

        let dltObj = data.splice(getIndex, 1)

        res.status(200).json({
            success :true,
            msg : `student with id ${id} removed successfully`,
            data : dltObj[0]
        })

    }catch(err){
        res.status(500).json({
            success : false,
            msg : 'server error',
            error : err.message
        })
    }
}

module.exports = {
    getAllStudents,
    getSingleStudent,
    createStudent,
    updateStudent,
    removeStudent
}