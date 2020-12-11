var elecctron = require('electron')
var app = elecctron.app
var BrowserWindow = elecctron.BrowserWindow

var mainWindow = null
app.on('ready', () => {
    mainWindow = new BrowserWindow({ width: 300, height: 300 })
    mainWindow.loadFile('index.html')
    mainWindow.on('closed', () => {
        mainWindow = null
    })
})