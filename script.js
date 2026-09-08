const overlay = document.getElementById('affirmation-overlay');
const mainContent = document.getElementById('main-content');
const affirmImg = document.getElementById('affirm-img');
const auraElement = document.getElementById('aura-level');
const warning = document.getElementById('warning');

// Enter actie
affirmImg.addEventListener('click', () => {
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        mainContent.style.display = 'block';
        startGlazing();
    }, 800);
});

function startGlazing() {
    // Chutney Status stijgt
    let aura = 99.9;
    setInterval(() => {
        aura += 0.009;
        auraElement.innerText = aura.toFixed(3) + "%";
    }, 100);

    // Toon waarschuwing na 5 seconden
    setTimeout(() => {
        warning.style.opacity = '1';
    }, 5000);
}

// Mouse movement paranoia effect
document.addEventListener('mousemove', (e) => {
    if (mainContent.style.display === 'block') {
        const x = (window.innerWidth / 2 - e.pageX) / 40;
        const y = (window.innerHeight / 2 - e.pageY) / 40;
        document.querySelector('.glitch').style.transform = `translate(${x}px, ${y}px)`;
        
        // Random flits bij snelle beweging
        if (Math.random() > 0.98) {
            document.body.style.backgroundColor = "#1a0000";
            setTimeout(() => document.body.style.backgroundColor = "#050505", 30);
        }
    }
});