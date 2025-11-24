const express = require("express");
const port = 8777;
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


app.get("/" , ( req , res)=>{
    res.render("index",{name:"mayank"})
})

app.get('/profile/:username',(req , res)=>{
    res.send(`welcome ${ req.params.username}`)
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});