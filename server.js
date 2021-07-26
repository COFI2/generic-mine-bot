
const express = require('express')
const server = express();
 
server.all('/', (req, res) => {
    res.send('Servidor iniciado');
});
 
function keepAlive() {
   server.listen(3000, () => { console.log("Tamo bien" + Date.now()) });
}

module.exports = keepAlive;
