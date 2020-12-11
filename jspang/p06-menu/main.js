var elecctron = require('electron')
var app = elecctron.app
var BrowserWindow = elecctron.BrowserWindow

var mainWindow = null
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 500,
        height: 500
    })
    require('./main/menu.js')
    mainWindow.loadFile('index.html')
    mainWindow.on('closed', () => {
        mainWindow = null
    })
})