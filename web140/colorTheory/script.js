// Sample palettes
const palettes = {
  1: ["#FF5733", "#33FFCE", "#334CFF"], // Complementary
  2: ["#F4E1D2", "#D2F4E1", "#D2E1F4"], // Triadic
  3: ["#333333", "#666666", "#999999"], // Monochromatic
  4: ["#FFB347", "#FFCC33", "#FFD700"]  // Analogous
};

// Update color preview
document.querySelectorAll("[data-palette]").forEach(btn => {
  btn.addEventListener("click", () => {
    const palette = palettes[btn.getAttribute("data-palette")];

    document.getElementById("color1").style.background = palette[0];
    document.getElementById("color2").style.background = palette[1];
    document.getElementById("color3").style.background = palette[2];

    document.getElementById("hex-display").textContent =
      `HEX Codes: ${palette[0]}, ${palette[1]}, ${palette[2]}`;

    // Update example card
    const card = document.querySelector(".example-card");
    const cardButton = card.querySelector(".sample-button");

    card.style.background = palette[0];
    card.style.color = palette[2];
    cardButton.style.background = palette[1];
  });
});
