// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// Display the current version
let version = window.location.hash.substring(1);
document.getElementById('version').innerText = version;
// Listen for messages
const {ipcRenderer} = require('electron');
ipcRenderer.on('message', function(event, text) {
  console.log('got message');
  var container = document.getElementById('messages');
  var message = document.createElement('div');
  message.innerHTML = text;
  container.appendChild(message);
})