const fs = require('fs')

fs.createReadStream('./assets/floc.jpg')
    .pipe(fs.createWriteStream('./assets/floc-stream.jpg'))
    .on('finish', () => console.log('Imagem foi escrita'))
