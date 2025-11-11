const galeria = document.querySelector('.galeria-imagens');
const navegacao = document.querySelector('.galeria-navegacao');

let scrollAmount = 0;
const scrollSpeed = 215;
let intervalID;


function autoScroll() {
    scrollAmount += scrollSpeed;

    if (scrollAmount >= galeria.scrollWidth - galeria.clientWidth) {
        scrollAmount = 0;

        galeria.scrollTo ({
            left: scrollAmount,
            behavior: 'auto'
        });
        return

    }

    galeria.scrollBy({
        left:scrollSpeed,
        behavior: 'smooth'
    });

    /* galeria.scrollLeft = scrollAmount; */
}

function startScroll() {
    intervalID = setInterval(autoScroll, 3000);

}

function stopScroll() {
    clearInterval(intervalID)
}

galeria.addEventListener('mouseover', stopScroll);
galeria.addEventListener('mouseout', startScroll);

startScroll();