const { app, BrowserWindow } = require('electron')
app.whenReady().then(() => {
    new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    }).loadFile('index.html')
})