const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const data = path.join(__dirname, "data.json");

const obj = JSON.parse(fs.readFileSync(data));

app.get("/", function(req, res) {
    obj.count_index += 1;
    fs.writeFileSync(data, JSON.stringify(obj, null, 3));
    res.send(`
    <h1>Корневая страница</h1>
    <p>Просмотров: ${obj.count_index}</p>
    <a href="/about">Ссылка на станицу /about</a>
    `)
});

app.get("/about", function(req, res) {
    obj.count_about += 1;
    fs.writeFileSync(data, JSON.stringify(obj, null, 3));
    res.send(`
    <h1>Корневая страница</h1>
    <p>Просмотров: ${obj.count_about}</p>
    <a href="/">Ссылка на станицу /</a>
    `)
});


app.listen(3000);