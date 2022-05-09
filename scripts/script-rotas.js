// açoes de navegacao hader-nav-menu

$('header#header-principal div#header-principal-inferior nav#header-principal-nav-menu ul#nav-menu-esquerda li:eq(0)').click(function(){
    $('html, body').animate({scrollTop:$('header#header-principal').offset().top}, 1000)
})

$('header#header-principal div#header-principal-inferior nav#header-principal-nav-menu ul#nav-menu-esquerda li:eq(1)').click(function(){
    $('html, body').animate({scrollTop:$('section#main-principal-quemsou').offset().top}, 1000, function(){
       if($(window).width() < 812){
        esconderMenu();
        controle = true;
       }
    })
})

$('header#header-principal div#header-principal-inferior nav#header-principal-nav-menu ul#nav-menu-esquerda li:eq(2)').click(function(){
    $('html, body').animate({scrollTop:$('section#oque-faco').offset().top}, 1000, function(){
       if($(window).width() < 812){
        esconderMenu();
        controle = true;
       }
    })
})

$('header#header-principal div#header-principal-inferior nav#header-principal-nav-menu ul#nav-menu-direita li:eq(0)').click(function(){
    $('html, body').animate({scrollTop:$('section#portfolio').offset().top}, 1000, function(){
       if($(window).width() < 812){
        esconderMenu();
        controle = true;
       }
    })
})

$('header#header-principal div#header-principal-inferior nav#header-principal-nav-menu ul#nav-menu-direita li:eq(2)').click(function(){
    $('html, body').animate({scrollTop:$('section#contato').offset().top}, 1000, function(){
       if($(window).width() < 812){
        esconderMenu();
        controle = true;
       }
    })
})


// açoes de navegacao footer

$('footer div.footer-mestre div#footer-inferior div#footer-inferior-menu ul#footer-menu li:eq(0)').click(function(){
    $('html, body').animate({scrollTop:$('header#header-principal').offset().top}, 1000)
})

$('footer div.footer-mestre div#footer-inferior div#footer-inferior-menu ul#footer-menu li:eq(1)').click(function(){
    $('html, body').animate({scrollTop:$('section#main-principal-quemsou').offset().top}, 1000)
})

$('footer div.footer-mestre div#footer-inferior div#footer-inferior-menu ul#footer-menu li:eq(2)').click(function(){
    $('html, body').animate({scrollTop:$('section#oque-faco').offset().top}, 1000)
})

$('footer div.footer-mestre div#footer-inferior div#footer-inferior-menu ul#footer-menu li:eq(3)').click(function(){
    $('html, body').animate({scrollTop:$('section#portfolio').offset().top}, 1000)
})

$('footer div.footer-mestre div#footer-inferior div#footer-inferior-menu ul#footer-menu li:eq(5)').click(function(){
    $('html, body').animate({scrollTop:$('section#contato').offset().top}, 1000)
})