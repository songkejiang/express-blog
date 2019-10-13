const crypto = require('crypto');
const KEY= 'Jks_77777'

function md5(content) {
    let md5 = crypto.createHash('md5')
    return md5.update(content).digest('hex') //16进制
}

export function genPassword(password) {
    const str = `password=${password}&key=${KEY}`
    return md5(str)
}