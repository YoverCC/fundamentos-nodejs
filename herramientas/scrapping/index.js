const puppeteer = require('puppeteer');

// funcion autoejecutada asincrona, se mete entre parentesis para convertirla en expresion y ejecutarla
(async () => {
    // Nuestro codigo
    console.log('Lanzamos navegador!');
    const browser = await puppeteer.launch({headless: false}); // false para verlo

    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');

    var titulo1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
        return h1.innerHTML;
    })

    console.log(titulo1);

    console.log('Cerramos navegador...');
    browser.close();
    console.log('Navegador cerrado');
})();

// para que funcione tuve que instalar google-chrome en el wsl :(
/* Segui un comentario de un buen compañero de clase que se hizo una!

wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt -y install ./google-chrome-stable_current_amd64.deb

Luego no me tiro error al correr el script.

*/