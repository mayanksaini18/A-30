
const express = require("express");
const port = 8000;
const app = express();

app.use(express.json());



app.get("/" , ( req , res)=>{
    res.send("landing page");

})

app.get('/profile', (req , res)=>{
    res.send("profile page :(");
})
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
