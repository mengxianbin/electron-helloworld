const { shell } = require('electron')
var link = document.querySelector('#link')
link.onclick = e => {
    e.preventDefault()
    var href = link.getAttribute('href')
    shell.openExternal(href)
}