// Ativando o menu mobile

function mostraMenu(){
    $('nav#header-principal-nav-menu ul.header-nav-menu').css('display', 'flex');

    $('nav#header-principal-nav-contato ul#icone-menu ion-icon#menu-humburguer').css('display', 'none');

    $('nav#header-principal-nav-contato ul#icone-menu ion-icon#menu-X').css('display', 'flex');

    $('nav#header-principal-nav-menu ul.header-nav-menu').addClass('animate__animated animate__fadeInRight animate__slow');
}

function esconderMenu(){
    $('nav#header-principal-nav-menu ul.header-nav-menu').css('display', 'none');

    $('nav#header-principal-nav-contato ul#icone-menu ion-icon#menu-X').css('display', 'none');

    $('nav#header-principal-nav-contato ul#icone-menu ion-icon#menu-humburguer').css('display', 'flex');
}

let controle = true;

$('nav#header-principal-nav-contato ul#icone-menu').click(function(){
    if(controle == true){
        mostraMenu();
        controle = false;
    }else{
        esconderMenu();
        controle = true;
    }
})