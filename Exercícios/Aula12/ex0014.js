var agora = new Date()
var diaSem = agora.getDay()

switch (diaSem) {
    case 0:
        console.log('Bom domingo!')
        break
    case 1:
        console.log('Boa segunda!')
        break
    case 2:
        console.log('Boa terça!')
        break
    case 3:
        console.log('Boa quarta!')
        break
    case 4:
        console.log('Boa quinta!')
        break
    case 5:
        console.log('Boa sexta!')  
        break
    case 6:
        console.log('Bom sábado!')
        break
    default:
        console.log('Dia inválido!')
}