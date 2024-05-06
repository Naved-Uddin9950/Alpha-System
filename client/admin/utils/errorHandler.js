export const errorHandler = (message) => {
    const errorScreen = document.querySelector('.error');
    const errorMessage = document.querySelector('.errorMessage');
    const close = document.querySelector(".close");

    if(message) {
        errorMessage.textContent = message;
        errorScreen.style.display = 'flex';
    }
    
    close.addEventListener('click', () => {
        errorScreen.style.display = 'none';
    });
}
    