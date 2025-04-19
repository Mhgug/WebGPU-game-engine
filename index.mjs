import { createRequire } from 'module'
const { JSDOM } = require('jsdom');
const require = createRequire(import.meta.url);
const express = require('express');
const app = express();
const port = 3000;
const path = import("path");
import { create, globals } from 'webgpu';

Object.assign(globalThis, globals);
const navigator = { gpu: create([]) };

app.get("/", async (req, res) => {
    const adapter = await navigator.gpu?.requestAdapter();
    const device = await adapter?.requestDevice();
    const canvas = document.querySelector('canvas');
          
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
});

app.listen(port, () => {
    console.log("wowow");
});