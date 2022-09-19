let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}

function inLista(n1, l){
    if (l.indexOf(Number(n1)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) // push é usado para adicionar um valor em uma array
        let item = document.createElement('option') // usado para criar elementos html
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) //usado para colocar a variavel item na lista
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encotrado na lista.')
    }
    num.value = '' // apagar o numero digitado pelo usario no input
    num.focus() // focar no num.
}

function finalizar(){
    if(valores.length==0){
        window.alert('Adicione valores')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){ //loop para somar todos os valores na array
            soma+=valores[pos]
        }
        for(let pos in valores){
            media= soma/valores.length
        }
        for(let pos in valores){
            if(valores[pos] >maior){
                maior = valores[pos]
            }
            if(valores[pos] <maior){
                
                menor = valores[pos]
            }
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Numeros cadrastados:${total}</p>`
        res.innerHTML += `<p>O maior valor informado foi:${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi:${menor}</p>`
        res.innerHTML += `<p>Soma::${soma}</p>`
        res.innerHTML += `<p>Média:${media}</p>`
    }
}

