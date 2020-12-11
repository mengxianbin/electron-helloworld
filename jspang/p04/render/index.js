var fs = require('fs')
window.onload = function () {
    var load = this.document.querySelector('#load')
    var content = this.document.querySelector('#content')
    load.onclick = function () {
        fs.readFile('data', (err, data) => {
            content.innerHTML = data
            console.log(err)
        })
    }
}