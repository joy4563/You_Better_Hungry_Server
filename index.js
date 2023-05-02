const express = require('express');
const app = express();
const port = 5000;

const chefs = require("./chef.json");


app.get("/", (req, res) => {
    res.send("chef is cooking...");
});

app.get("/chefs", (req, res) => {
    res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const chef = chefs.filter((n) => parseInt(n.id) === id);

    res.send(chef);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
