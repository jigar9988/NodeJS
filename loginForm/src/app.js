const express = require('express');
const path = require('path');
const app = express();
const User = require("./db/conn")
const port = process.env.PORT || 3000;

app.set("view engine", "hbs");
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`server run at ${port}`);
})



