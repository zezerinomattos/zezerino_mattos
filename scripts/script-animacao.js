/*--------------------------*/
/*   SECTION QUEM SOU       */
/*--------------------------*/

//Deixando os elementos com opacidade 0
$('div#quemsou-inferior-skills-mestre').css('opacity', 0);

$('div#quemsou-inferior-skills-mestre').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div#quemsou-inferior-skills-mestre').addClass('animate__animated animate__fadeInUp animate__slow');
    }else{
        $('div#quemsou-inferior-skills-mestre').removeClass('animate__animated animate__fadeInUp animate__slow');
    }
}, {
    offset:'550px;'
})

/*--------------------------*/
/*   SECTION O QUE FAÇO     */
/*--------------------------*/

$('div#oque-faco-centro').css('opacity', 0);

$('div#oque-faco-centro').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div#oque-faco-centro').addClass('animate__animated animate__fadeIn animate__slower');
    }else{
        $('div#oque-faco-centro').removeClass('animate__animated animate__fadeIn animate__slower');
    }
}, {
    offset:'500px;'
})

$('div#oque-faco-mestre-inferior').css('opacity', 0);

$('div#oque-faco-mestre-inferior').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div#oque-faco-mestre-inferior').addClass('animate__animated animate__fadeIn animate__slower');
    }else{
        $('div#oque-faco-mestre-inferior').removeClass('animate__animated animate__fadeIn animate__slower');
    }
}, {
    offset: '500px;'
})