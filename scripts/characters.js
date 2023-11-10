function imageCharacter(name, cardImagem) {
    document.getElementById("cardImagem").src = cardImagem;
    document.getElementById("name").innerHTML = name;
}


const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll("#character-selector i");
const cardHeight = carousel.querySelector(".card").offsetHeight; // Use offsetHeight para obter a altura do cartão
let currentCardIndex = 0;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const cardCount = carousel.children.length;

        if (btn.id === "top") {
            // Navegar para o elemento acima
            currentCardIndex = Math.max(currentCardIndex - 1, 0);
        } else {
            // Navegar para o próximo elemento
            currentCardIndex = Math.min(currentCardIndex + 1, cardCount - 1);
        }

        const scrollAmount = currentCardIndex * cardHeight;
        carousel.scrollTo({
            top: scrollAmount,
            behavior: "smooth"
        });
    });
});




















