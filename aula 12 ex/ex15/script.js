function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.Value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique o ano e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'HOMEM'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe.xcf')
            } else if (idade>= 10 && idade < 21){
                img.setAttribute('src', 'jovem M.xcf')
            }else if(idade < 50){
                img.setAttribute('src', 'HOMEM.xcf')
            }
            else {
                img.setAttribute('src', 'idoso M.xcf')
            }
            }else if (fsex[1].checked){
        genero = 'MULHER'
        if (idade >= 0 && idade < 10){
            img.setAttribute('src', 'bebe.xcf')
        } else if (idade>= 10 && idade < 21){
            img.setAttribute('src', 'jovem F.xcf')
        }else if(idade < 50){
            img.setAttribute('src', 'MUlher.xcf')
        }
        else {
            img.setAttribute('src', 'idosa.xcf')
        }

    }
    res.innerHTML = `detectamos ${genero} com ${idade} anos`
    }
}