const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log(req.cookies);
});
app.get("/dashboard", (req, res)=>{
  console.log(req.cookies);
  res.send("Cookies parsed!");
})


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});