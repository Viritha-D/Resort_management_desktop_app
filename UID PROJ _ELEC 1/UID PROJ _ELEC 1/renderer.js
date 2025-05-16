document.getElementById('clickMe').addEventListener('click', () => {
    console.log('Button clicked!');
    window.electronAPI.sendMessage('Hello from Renderer!');
});
