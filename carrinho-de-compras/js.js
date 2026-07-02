function add(produto){
    let preço = document.getElementById('valor_' + produto)
    let qtd = document.getElementById('qtd_' + produto)
    let total = document.getElementById('total_' + produto)

    qtd.innerHTML++

    total.innerHTML = qtd.innerHTML * preço.innerHTML
    
}