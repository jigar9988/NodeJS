const express = require("express");
const router = new express.Router();
const Student = require("../modules/students")

// we need to define the router
router.get("/thapa", (req, res) => {
    res.send("hey coder!");
})


router.get("", (req, res) => {
    res.send("hello from the other side");
})

// app.post("/students", (req,res)=>{
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
// })

router.post("/students", async(req,res)=>{
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (error) {
        res.status(400).send(error);
    }
})

// read the data of registered studens
router.get("/students",async(req,res) =>{
    try {
        const studentsData = await Student.find()
        res.send(studentsData);
    } catch (error) {
        res.send(error)
    }
})


// read the data of specific student 
router.get("/students/:id", async(req,res)=>{
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        console.log(studentData);
        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

// update the students by its id 
router.patch("/students/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
            new : true
        });
        res.send(updateStudents);
    } catch (error) {
        res.status(400).send(e);
    }
})


// delete student by its id 
router.delete("/students/:id", async(req,res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(deleteStudent);
    } catch (error) {
        res.status(500).send(e)
    }
})

module.exports = router;