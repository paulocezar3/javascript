function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('foto')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `agora são ${hora} horas.`
if(hora >= 0 && hora < 12){
    img.src = 'imgmanha.jpg'
    document.body.style.background = '#e2cd9f'
     msg.innerHTML = `Agora são ${hora} horas<br> BOM DIA`

}else if(hora >=12 && hora < 18){
    img.src = 'imgtarde3.jpg'
    document.body.style.background = '#b9846f'
    msg.innerHTML = `Agora são ${hora} horas<br> BOA TARDE`
}else{
    img.src = 'imgnoite.jpg'
    document.body.style.background = '#515154'
     msg.innerHTML = `Agora são ${hora} horas<br> BOA NOITE`
}

}
