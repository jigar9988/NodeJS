const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const register = require('./models/registers');
const { json } = require("express");
const port = process.env.PORT || 3000;
require("./db/conn");
const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")
const partial_path = path.join(__dirname, "../templates/partials")

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(static_path))
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partial_path);

app.get("/", (req, res) => {
  res.render("index")
});

app.get("/register", (req, res) => {
  res.render("register");
})
app.get("/login", (req, res) => {
  res.render("login");
})
app.post("/register", async (req, res) => {
  //  res.render(`register`);
  try {
    const password = req.body.password;
    const Cpassword = req.body.conformPassword;

    if (password === Cpassword) {
      const registerEmployee = new register({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        conformPassword: req.body.conformPassword
      })
      const registered = await registerEmployee.save();
      console.log(registered);
      res.status(201).render("index")
    } else {
      res.send('passwor not matching ')
    }
  }
  catch (err) {
    res.status(400).send(err)
  }
});
app.post("/login",async(req,res)=>{
  try{
      const email = req.body.email;
      const password = req.body.password;

      const useremail = await register.findOne({email:email});

      if(useremail.password===password){
        res.status(201).render('index');
      }
      else{
        res.send("invalid login ");
      }
  }
  catch(error){
    res.status.send("invalid login");
  }
})

app.listen(port, () => {
  console.log(`server is running on ${port}`);
})