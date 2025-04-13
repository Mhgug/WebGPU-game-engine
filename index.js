const express = require('express');
const app = express();
const port = 3000;
const path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
    console.log("wowow");
})

async function main() {
    const adapter = await navigator.gpu?.requestAdapter();
    const device = await adapter?.requestDevice();
    const canvas = document.querySelector("canvas");

    if(!device) {
        alert("Webgpu not available");
    }
    if(!canvas) {
        alert("canvas not available");
    }

    const context = canvas.getContext('webgpu');
    const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
    context.configure({
        device,
        format: presentationFormat,
    });
}
main();