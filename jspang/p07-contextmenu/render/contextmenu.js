const { remote } = require('electron')
const { globalShortcut, Menu, BrowserWindow } = remote

// https://stackoverflow.com/questions/40776653/electron-menu-accelerator-not-working

var nw100 = () => {
    var win = new BrowserWindow({
        width: 100,
        height: 100,
    })
    win.on('close', () => {
        win = null
    })
}

globalShortcut.register('w', nw100)

var template = [
    {
        label: 'menu-1',
        submenu: [
            {
                label: 'm1-s1',
                accelerator: 'w',
                click: () => {
                    nw100()
                }
            },
            {
                label: 'm1-s2',
                click: () => {
                    var win = new BrowserWindow({
                        width: 200,
                        height: 200,
                    })
                    win.on('close', () => {
                        win = null
                    })
                }
            },
        ]
    },
    {
        label: 'menu-2',
        submenu: [
            {
                label: 'm2-s1',
                click: () => {
                    var win = new BrowserWindow({
                        width: 300,
                        height: 300,
                    })
                    win.on('close', () => {
                        win = null
                    })
                }
            },
            {
                label: 'm2-s2',
                click: () => {
                    var win = new BrowserWindow({
                        width: 400,
                        height: 400,
                    })
                    win.on('close', () => {
                        win = null
                    })
                }
            },
        ]
    }
]

window.addEventListener('contextmenu', function (event) {
    event.preventDefault()
    var menu = Menu.buildFromTemplate(template)
    menu.popup({
        window: remote.getCurrentWindow()
    })
    menu.on('closed', () => {
        menu = null
    })
})