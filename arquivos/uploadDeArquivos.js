const fs = require('fs')

fs.readFile('./assets/floc.jpg', (erro, buffer) => {
    console.log('Imagem foi bufferizada')
    
    fs.writeFile('./assets/flocCopy.jpg', buffer, erro => {
        console.log('imagem foi escrita')
    })
})