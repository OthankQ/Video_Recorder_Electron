// Buttons
const videoElement = document.querySelector('video');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const videoSelectBtn = document.getElementById('videoSelectBtn');
videoSelectBtn.onclick = getVideoSources;

const { desktopCapturer } = require('electron');

// Get available video source

async function getVideoSources() {
    const inputSources = await desktopCapturer.getSources({
        types: ['window', 'screen'],
    });
}
