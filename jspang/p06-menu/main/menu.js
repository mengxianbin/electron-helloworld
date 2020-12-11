const { Menu, BrowserWindow } = require('electron')

var template = [
    {
        label: 'menu-1',
        submenu: [
            {
                label: 'm1-s1',
                accelerator: 'alt+1',
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
                accelerator: 'alt+2',
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
                accelerator: 'alt+3',
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
                accelerator: 'alt+4',
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

var menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
