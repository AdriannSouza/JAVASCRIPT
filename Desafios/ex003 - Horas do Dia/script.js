function carregar() {
    let msg = window.document.getElementById('msg') //localiza pelo DOM a div de msg dentro da section.
    let img = window.document.getElementById('imagem') //localiza pelo DOM a div com imagem dentro da section.

    var data = new Date() //identifica a data.
    var hora = data.getHours() //captura apenas as horas da data.
    var minuto = data.getMinutes()
    hora = 18

    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos!`

   if (hora >= 6 && hora < 12) {
        img.src = "manha.png"
        document.body.style.backgroundColor = 'blanchedalmond'

    } else if (hora >= 12 && hora < 18) {
        img.src = "tarde.png"
        document.body.style.backgroundColor = 'gold'
    } else {
        document.body.style.backgroundColor = 'gray'
        img.src = 'noite.png'
    }
}
