import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// Enable cookie parser
app.use(cookieParser());

// Now you can access cookies
app.get("/dashboard", (req, res) => {
    console.log(req.cookies);   
    res.send("Cookies parsed!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});