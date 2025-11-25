// Simple day counter since a specific date
window.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('day-counter');
    if(counterElement) {
        const startDate = new Date('2024-3-09'); // replace with the day you started dating
        const today = new Date();
        const diffTime = Math.abs(today - startDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        counterElement.innerText = diffDays;
    }

    // Simple fade-in animation for elements with .fade class
    const fadeElements = document.querySelectorAll('.fade');
    fadeElements.forEach(el => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.transition = 'opacity 1.5s';
            el.style.opacity = 1;
        }, 100);
    });
});
