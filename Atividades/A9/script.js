// Atualiza o border-radius dinamicamente
function updateBorderRadius() {
    const topLeft = document.getElementById("top-left").value;
    const topRight = document.getElementById("top-right").value;
    const bottomLeft = document.getElementById("bottom-left").value;
    const bottomRight = document.getElementById("bottom-right").value;

    const square = document.getElementById("square");

    // Aplica o border-radius com base nos valores dos sliders
    square.style.borderRadius = `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`;

    // Atualiza os valores exibidos
    document.getElementById("top-left-value").textContent = `${topLeft}%`;
    document.getElementById("top-right-value").textContent = `${topRight}%`;
    document.getElementById("bottom-left-value").textContent = `${bottomLeft}%`;
    document.getElementById("bottom-right-value").textContent = `${bottomRight}%`;
}

// Adiciona evento aos sliders
document.querySelectorAll('input[type="range"]').forEach((input) => {
    input.addEventListener("input", updateBorderRadius);
});

// Inicializa com os valores padrão
updateBorderRadius();
