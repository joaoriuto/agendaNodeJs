const fs = require('fs')
const path = require('path')

module.exports = (caminho, nomeArquivo, callImageCreated) => {

    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho)
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1
    

    if (tipoEhValido) {
        const newPath = `./assets/imagens/${nomeArquivo}${tipo}`
        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(newPath))
            .on('finish', () => callImageCreated(false, newPath))       
    } else {

            const erro = 'Epa! Esse arquivo é inválido!'
            console.log('Epa! Esse arquivo é inválido!')
            callImageCreated(erro)
    }

}