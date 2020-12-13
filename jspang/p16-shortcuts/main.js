const { app, BrowserWindow, globalShortcut } = require('electron')
app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })
    mainWindow.webContents.openDevTools()
    mainWindow.loadFile('index.html')
    mainWindow.maximize()
    globalShortcut.register('ctrl+1', () => {
        mainWindow.loadFile('1.html')
    })
    globalShortcut.register('ctrl+2', () => {
        mainWindow.loadFile('2.html')
    })
    globalShortcut.register('ctrl+h', () => {
        mainWindow.loadFile('index.html')
    })
})