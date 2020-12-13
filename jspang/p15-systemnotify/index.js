window.onload = () => {
    console.log('window.Notification: ' + window.Notification)
    if (!window.Notification) {
        alert('window.Notification: ' + window.Notification)
        return
    }

    Notification.requestPermission().then(result => {
        console.log('Notification.permission: ' + Notification.permission)
        if (result != 'granted') {
            alert('Notification.permission: ' + Notification.permission)
            return
        }

        document.getElementById('notifyButton').addEventListener('click', () => {
            var notification = new Notification('Hello', {
                body: 'World',
                icon: 'icon.dio.png',
                tag: 'demo'
            })
            notification.onload = () => {
                console.log('notification.onload')
            }
            notification.onshow = () => {
                console.log('notification.onshow')
                console.log('notification: ' + JSON.stringify(notification))
            }
            notification.onclick = () => {
                console.log('notification.onclick')
            }
            notification.onclose = () => {
                console.log('notification.onclose')
            }
            notification.onerror = err => {
                console.error(err)
            }
        })
    })
}