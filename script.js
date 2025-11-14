const galeria = document.querySelector('.galeria-imagens');
const navegacao = document.querySelector('.galeria-navegacao');

let scrollAmount = 0;
const scrollSpeed = 0.5;
let intervalID;


function autoScroll() {


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
        behavior: 'auto'


    });
    scrollAmount += scrollSpeed;

    /* galeria.scrollLeft = scrollAmount; */
}

function startScroll() {
    intervalID = setInterval(autoScroll, 30);

}

function stopScroll() {
    clearInterval(intervalID)
}

galeria.addEventListener('mouseover', stopScroll);
galeria.addEventListener('mouseout', startScroll);

startScroll();