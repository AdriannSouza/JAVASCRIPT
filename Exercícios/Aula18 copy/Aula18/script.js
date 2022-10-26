function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } 
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.getElementById('img')

        if (fsex[0].checked) {
            gen = 'homem'
            if (idade < 10) {
                //Criança
                img.src = "imagens/foto-bebe-m.png"
            } else if (idade < 21) {
                //Jovem
                img.src = "imagens/foto-jovem-m.png"
            } else if (idade < 50) {
                //Adulto
                img.src = "imagens/foto-adulto-m.png"
            } else {
                //Idoso
                img.src = "imagens/foto-idoso-m.png"
            }
        
        } else if (fsex[1].checked) {
            gen = 'mulher'
            if (idade < 10) {
                //Criança
                img.src = "imagens/foto-bebe-f.png"
            } else if (idade < 21) {
                //Jovem
                img.src = "imagens/foto-jovem-f.png"
            } else if (idade < 50) {
                //Adulto
                img.src = "imagens/foto-adulto-f.png"
            } else {
                //Idoso
                img.src = "imagens/foto-idoso-f.png"
            }
        }
        
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
    }
}