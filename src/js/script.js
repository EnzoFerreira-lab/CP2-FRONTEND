window.onload = function() {
    const botoes = document.querySelectorAll(".comprar");
    botoes.forEach(botao => {
        botao.addEventListener("click", function() {
            const prato = this.parentElement.querySelector("h3").textContent;
            alert("Você selecionou: " + prato);
        });
    });
};