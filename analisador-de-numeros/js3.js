let num = document.getElementById('number')
let list = document.getElementById('lista')
let result = document.getElementById('result')
let valores = []

function isNumber(n){
    if ((Number(n)>=1) && (Number(n)<=100)){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if (l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }
}

function add(){
    if (isNumber(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text= `O valor ${num.value} foi adicionado`
        lista.appendChild(item)
        result.innerHTML=''
    }else{
        alert('Digite um número válido')
    }
    number.value=''
    num.focus()
    result.innerHTML=''
}

function finish(){
    if(valores==0){
        alert('Preencha com algum valor')
    }else{
        let total = valores.length
        result.innerHTML+=`<p>A quantidade de números é de ${total}.</p>`

        let soma = 0
        for(let valor of valores){
            soma += valor
        }
        result.innerHTML+= `<p>A soma dos valores é de ${soma}</p>`

        let media = (soma/total).toFixed(2)
        result.innerHTML+= `<p>A média dos valores é de ${media}</p>`
    }

    let maior = valores[0]
    let menor = valores[0]
    for (let valor1 of valores){
        if(valor1 > maior){
            maior = valor1
        }if(valor1 < menor){
            menor = valor1
        }
    }
        result.innerHTML+= `<p>O maior valor é o ${maior}</p>`
        result.innerHTML+= `<p>O maior valor é o ${menor}</p>`
}

function limpar(){
    result.innerHTML = ''
    lista.innerHTML=''
    valores= []
}