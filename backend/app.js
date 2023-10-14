const express = require("express");

const app = express();


app.use((req, res, next) => {
    console.log("First Middlewere");
    next();
});

app.use((req, res, next) => {
   res.send("First Responce from Express !!!")
});



module.exports = app ;