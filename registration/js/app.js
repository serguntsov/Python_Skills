const inputPass = document.getElementById('Password');
const iconPass = document.getElementById('pass-icon');

iconPass.addEventListener('click', () => {
    if (inputPass.getAttribute('type') === "password") {
        inputPass.setAttribute('type', 'text');
        iconPass.innerHTML = '<img src="../image/hide.png" alt="hide">';
    } else {
        inputPass.setAttribute('type', 'password');
        iconPass.innerHTML = '<img src="../image/show.png" alt="show">';
    }
});
