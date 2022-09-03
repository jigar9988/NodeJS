const express = require("express");
require("./db/conn");
const Student = require("./modules/students")
const studentRouter = require("./routers/student")

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json())

// const router = new express.Router();

// // we need to define the router
// router.get("/thapa", (req, res) => {
//     res.send("hey coder!");
// })

// we need to register our router
// app.use(router)

app.use(studentRouter);

app.listen(port, ()=>{
    console.log(`connection is setup at ${port}`);
})
