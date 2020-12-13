const { app, BrowserWindow } = require('electron')
app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })
    mainWindow.webContents.openDevTools()
    mainWindow.maximize()
    mainWindow.loadFile('index.html')
})