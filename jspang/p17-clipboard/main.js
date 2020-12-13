const { app, BrowserWindow, globalShortcut } = require('electron')
app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })
    mainWindow.loadFile('index.html')
    mainWindow.maximize()
    mainWindow.webContents.openDevTools()

    globalShortcut.register('alt+c', () => {
        console.log('main send')
        mainWindow.webContents.send('copy', 'text')
        console.log('main sent')
    })
}).catch(err => {
    console.error(err)
})