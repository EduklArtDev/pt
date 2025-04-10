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

// controla o menu responsivo
function handleNavbar(){
    const navbar = document.getElementById('navbar');
    const header = navbar.querySelector('header');

    // se o menu não existir, retorna
    if(!navbar) return;

    // adiciona a classe active no menu
    navbar.classList.toggle('active');
    
    // se o menu estiver ativo, remove a classe d-none do header
    if(navbar.classList.contains('active')) {
        header.classList.remove('d-none');
        header.classList.add('d-flex', 'flex-column', 'align-items-start', 'w-100', 'py-2');
    } else {
        // se o menu não estiver ativo, adiciona a classe d-none do header
        header.classList.add('d-none');
        header.classList.remove('d-flex', 'flex-column', 'align-items-start', 'w-100', 'py-2');
    }
}

const menuBtn = document.getElementById('navbar-menu-btn');

// remover o menu responsivo quando a tela redimensionar para desktop
if(menuBtn) menuBtn.addEventListener('click', handleNavbar);
window.addEventListener('resize', () => {
    if(window.innerWidth > 768) {
        const navbar = document.getElementById('navbar');
        if(navbar && navbar.classList.contains('active')) {
            handleNavbar();
        }
    }
});