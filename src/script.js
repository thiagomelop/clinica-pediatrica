$(document).ready(function() {
$(window).scroll(function() {
    var secaoInicioPosicao = $("#inicio").offset().top;
    var janelaPosicao = $(this).scrollTop();

    if (janelaPosicao >= secaoInicioPosicao) {
    $(".menu a.oculto").fadeIn(500); /* Exibe o link "Início" quando passa da seção inicial */
    } else {
    $(".menu a.oculto").fadeOut(500); /* Oculta o link "Início" ao voltar para cima da seção inicial */
    }
});
});


const whatsappButton = document.getElementById('whatsappButton');

function toggleBlink() {
    whatsappButton.classList.toggle('blink');
}

setInterval(toggleBlink, 800); // Altere o intervalo conforme desejado
