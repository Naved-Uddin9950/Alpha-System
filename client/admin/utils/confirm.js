export const confirm = (text) => {
    const box = document.querySelector('.confirmBox');
    const message = document.querySelector('.message');
    const no = document.querySelector('.noOption');

    if(text) {
        message.textContent = text;
        box.style.display = 'flex';
    }

    no.addEventListener('click', () => {
        box.style.display = 'none';
    });
}