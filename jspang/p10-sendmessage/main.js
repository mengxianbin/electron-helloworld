const { app, BrowserWindow } = require('electron')
app.on('ready', () => {
    let win = new BrowserWindow()
    win.loadFile('renderer/index.html')
    app.on('closed', () => {
        win = null
    })
})