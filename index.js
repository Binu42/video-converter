const path = require('path');
const electron = require('electron');

const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow(`file://${__dirname}/src/index.html`);
})