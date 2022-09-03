const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");

app.set("view engine","hbs");
app.set("views",templatePath);

app.use(express.static(staticPath));

app.get("/",(req,res) =>{
    res.render("index",{
        channelName:"CodingHub",
    });
});

app.get("/about",(req,res) =>{
    res.render("about");
});

app.listen(port,() =>{
    console.log(`server running on port ${port}`);
});

