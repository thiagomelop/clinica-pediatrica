window.addEventListener('scroll', function() {
    var inicioSection = document.getElementById('imagem-logo');
    var inicioLink = document.getElementById('inicio-link');

    // Verifica se a posição de rolagem é maior que a posição da seção "Início"
    if (window.scrollY > inicioSection.offsetTop) {
        inicioLink.style.display = 'block'; // Torna o link "Início" visível
    } else {
        inicioLink.style.display = 'none'; // Oculta o link "Início"
    }
});



const whatsappButton = document.getElementById('whatsappButton');

function toggleBlink() {
    whatsappButton.classList.toggle('blink');
}

setInterval(toggleBlink, 800); // Altere o intervalo conforme desejado
