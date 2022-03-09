import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("ok");
});

app.listen(3333, () => console.log("Server is running!"));
