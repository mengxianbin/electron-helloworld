const create = this.document.querySelector('#newWindow')
const BrowserWindow = require('electron').remote.BrowserWindow

window.onload = function () {
    create.onclick = () => {
        newWindow = new BrowserWindow({
            width: 500,
            height: 500,
        })
        newWindow.loadFile('new.html')
        newWindow.on('close', () => {
            newWindow = null
        })
    }
}