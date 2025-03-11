var now = new Date()
var hora = now.getHours()
console.log(`agora são exatamente ${hora} horas`)
if(hora <= 5){
    console.log('Boa madrugada')
}else if(hora >= 6){
    console.log('Bom Dia')
}else if(hora <= 18){
    console.log('Boa Tarde')
}else if(hora > 18){
    console.log('Boa Noite')
} 