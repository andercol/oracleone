export const removeDatasRepetidas = (datas) => {

    const datasUnicas = []

    datas.forEach((data => {
        if(datasUnicas.indexOf(data.dataFormatada) === -1){
            datasUnicas.push(data.dataFormatada)
        }
    }))

    return datasUnicas
}


export const ordenaDatas = (data) => {
    data.sort((a, b) => {
        
        const primeiraData = moment(a, 'DD/MM/YYYYMMDD')
        const segundaData = moment(b, 'DD/MM/YYYYMMDD')
        return primeiraData - segundaData
    })
}