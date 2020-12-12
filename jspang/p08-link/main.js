const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
    var win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.webContents.openDevTools()
    win.loadFile('index.html')
    win.on('closed', () => {
        win = null
    })
})