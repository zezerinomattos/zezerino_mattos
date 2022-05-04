/*--------------------------*/
/*   SECTION QUEM SOU       */
/*--------------------------*/
/*--- Inferior skills carrosel----*/

var quantidade = $('div#inferior-skills-centro ul').length;
var limite = (quantidade * 146) * -1;
var largura = limite + 146;
var view_largura = $('div#quemsou-inferior-skills').width();


$('div#inferior-skills-mestre').css('width', limite * -1);

//$('div#teste').html(view_largura);


$('div#inferior-skills-direita').click(function(){
    
    posicao_atual = $('div#inferior-skills-centro').position().left;
    nova_posicao = posicao_atual - view_largura;

    if(limite < posicao_atual - view_largura){
        $('div#inferior-skills-centro').animate({left:nova_posicao}, 1000);
    }

    if(limite > (nova_posicao - view_largura)){
        $('div#inferior-skills-direita ion-icon').css('opacity', 0.5);
        $('div#inferior-skills-direita ion-icon').css('cursor', 'not-allowed');
    }

    $('div#inferior-skills-esquerda ion-icon').css('opacity', 1);
    $('div#inferior-skills-esquerda ion-icon').css('cursor', 'pointer');

})


$('div#inferior-skills-esquerda').click( function() {
    posicao_atual = $('div#inferior-skills-centro').position().left;

    if (posicao_atual + view_largura <=0){
        nova_posicao = posicao_atual + view_largura;
        $('div#inferior-skills-centro').animate({left:nova_posicao}, 1000);
    }

    if(nova_posicao == 0 ){
        $('div#inferior-skills-esquerda ion-icon').css('opacity', 0.5);
        $('div#inferior-skills-esquerda ion-icon').css('cursor', 'not-allowed');
    }

    $('div#inferior-skills-direita ion-icon').css('opacity', 1);
    $('div#inferior-skills-direita ion-icon').css('cursor', 'pointer');
})