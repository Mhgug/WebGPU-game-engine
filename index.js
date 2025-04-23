async function main() {
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
} main();