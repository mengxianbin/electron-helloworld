const { app, BrowserWindow, BrowserView } = require('electron')
app.on('ready', () => {
    var win = new BrowserWindow({
        width: 1200,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.webContents.openDevTools()
    win.loadFile('index.html')

    const view = new BrowserView()
    win.setBrowserView(view)
    view.webContents.loadURL('https://mengxianbin.github.io')
    view.setBounds({ x: 100, y: 100, width: 500, height: 500 })

    win.on('closed', () => {
        win = null
    })
})