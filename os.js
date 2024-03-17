const os = require('os')

// method to know user info
const user = os.userInfo()
console.log(user)

// method returns user system uptime info
console.log(`the system uptime is ${os.uptime()} seconds`)

// method shows how to show user os info
const currentos = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentos)