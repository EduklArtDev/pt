fetch('mts.json').then(res => res.json()).then(data => {
    document.getElementById('index00').innerHTML = data.index
    document.getElementById('footer00').innerHTML = data.footer

})

document.getElementById('ctt').addEventListener('click',(e)=>{
    e.preventDefault()
    fetch('mts.json').then(res => res.json()).then(data => {
        document.getElementById('index00').innerHTML = data.contato
    })
})
document.getElementById('sobre').addEventListener('click',()=>{
    fetch('mts.json').then(res => res.json()).then(data => {
        document.getElementById('index00').innerHTML = data.index
    })
})
document.getElementById('projetos').addEventListener('click',()=>{
    fetch('mts.json').then(res => res.json()).then(data => {
        document.getElementById('index00').innerHTML = data.footer
    })

    alert('O meu portfólio ainda está sobre cuidados "médicos", então me desculpe pela falta de conteudo nesse momento. Estou ajustando. (isso inclui o github.)')
})