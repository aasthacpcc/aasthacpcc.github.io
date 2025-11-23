// Optional JS: students can switch fonts for each mockup
function switchFonts(mockupClass) {
    const fonts = [
        ['Roboto', 'Poppins', 'Montserrat', 'Lobster', 'Raleway'],
        ['Lobster', 'Raleway', 'Roboto', 'Montserrat', 'Poppins'],
        ['Montserrat', 'Libre Baskerville', 'Roboto', 'Raleway', 'Poppins'],
        ['Poppins', 'Open Sans', 'Lobster', 'Montserrat', 'Roboto']
    ];

    const mockup = document.querySelector('.' + mockupClass);
    if (!mockup) return;

    const h1 = mockup.querySelector('h1');
    const h2 = mockup.querySelector('h2');
    const p = mockup.querySelector('p');
    const navLinks = mockup.querySelectorAll('nav a');

    // Randomly pick a font combination
    const combination = fonts[Math.floor(Math.random() * fonts.length)];
    h1.style.fontFamily = combination[0];
    h2.style.fontFamily = combination[1];
    p.style.fontFamily = combination[2];
    navLinks.forEach(link => link.style.fontFamily = combination[3]);
}
