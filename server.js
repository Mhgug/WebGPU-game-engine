const express = require('express');
const app = express();

app.use(express.static('WebGPU-game-engine'));

app.get("/", (req, res) => {
    res.send()
});

app.listen(3000, () => {
    console.log("wowow");
});