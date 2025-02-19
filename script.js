const flower = document.getElementById('flower');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset-button');
const center = document.querySelector('.center');

let petalos = document.querySelectorAll('.petal');
let messages = ["Me quiere", "No me quiere"];
let firstMessage = Math.random() < 0.5 ? 0 : 1;
let currentIndex = firstMessage;
let petalosCaidos = 0;

petalos.forEach(petalo => {
    petalo.addEventListener('click', () => {
        if (petalo.style.display !== 'none') {
            petalo.style.display = 'none';
            message.textContent = messages[currentIndex];
            currentIndex = (currentIndex + 1) % 2; 
            petalosCaidos++;

            
            if (petalosCaidos === petalos.length) {
                center.style.display = 'none';
                message.innerHTML = `<h1>${message.textContent}</h1>`; 
            }
        }
    });
});

resetButton.addEventListener('click', () => {
    petalos.forEach(petalo => {
        petalo.style.display = 'block';
    });

    center.style.display = 'block';
    message.textContent = "¡Haz clic en un pétalo para empezar!";
    message.style.fontSize = '1.5em'; 
    petalosCaidos = 0; 
    firstMessage = Math.random() < 0.5 ? 0 : 1;
    currentIndex = firstMessage;
});
