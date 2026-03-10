const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));
app.use("/admin", express.static("admin"));
app.use("/confidential", express.static("confidential"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(3000, () => {
    console.log("Server started: http://localhost:3000");
});