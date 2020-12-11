const { remote } = require('electron')
const { Menu, BrowserWindow } = remote

var template = [
    {
        label: 'menu-1',
        accelerator: 'a',
        submenu: [
            {
                label: 'm1-s1',
                accelerator: 'b',
                click: () => {
                    var win = new BrowserWindow({
                        width: 100,
                        height: 100,
                    })
                    win.on('close', () => {
                        win = null
                    })
                }
            },
            {
                label: 'm1-s2',
                accelerator: 'c',
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
        accelerator: 'd',
        submenu: [
            {
                label: 'm2-s1',
                accelerator: 'e',
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
                accelerator: 'f',
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