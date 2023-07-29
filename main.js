const form = document.getElementById("meu-form")
let nome = document.getElementById('my-name')
let telefone = document.getElementById("my-tel")
let vazio = ''
let corpoTabela = document.querySelector('tbody')
let arrayContato = []

function meuContato(){
    if(arrayContato.includes(telefone.value)){
    alert('Esse número já foi adicionado nos seus contatos')
    }

    else{
        arrayContato.push(telefone.value)
        adicionaContato()
    }
}

function adicionaLinha(){
    let linha = `<tr>`
    linha += `<td>${nome.value}</td>`
    linha += `<td>${telefone.value}</td>`
    linha += `<td><img src="./imagem/download.jpg" alt="agenda de contatos"></td>`
    
    return vazio += linha
}


function adicionaContato(){
    corpoTabela.innerHTML = adicionaLinha()
    nome.value = '';
    telefone.value = '';
}


form.addEventListener('submit', function(e){
    e.preventDefault()
    meuContato()
})