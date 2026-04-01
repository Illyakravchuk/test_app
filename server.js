const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

const checkAuth = (req, res, next) => {
    const isAuthenticated = false; 

    if (isAuthenticated) {
        next(); 
    } else {
        res.status(401).send("<h1>401 Unauthorized</h1><p>Доступ заборонено.</p>");
    }
};

app.get("/confidential/:filename", checkAuth, (req, res) => {
    const fileName = req.params.filename;
    res.sendFile(path.join(__dirname, "confidential", fileName));
});

app.get("/admin", checkAuth, (req, res) => {
    res.sendFile(path.join(__dirname, "admin/index.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(3000, () => {
    console.log("Server started: http://localhost:3000");
});