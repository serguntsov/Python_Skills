document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn_log = document.getElementById('openModalBtn_log');
    const openModalBtn_pass = document.getElementById('openModalBtn_pass');
    const modal1 = document.getElementById('modal1');
    const modal2 = document.getElementById('modal2');
    const overlay = document.getElementById('overlay');
    const overlay2 = document.getElementById('overlay2');
    const acceptBtn_log = document.getElementById('acceptBtn_log');
    const acceptBtn_pass = document.getElementById('acceptBtn_pass');

    //Логин
    openModalBtn_log.addEventListener('click', function () {
        modal1.style.display = 'flex';
    });
    overlay.addEventListener('click', function () {
        modal1.style.display = 'none';
    });
    acceptBtn_log.addEventListener('click', function () {
      //отправка данных на сервер.
        document.getElementById('login').value = '';
        modal1.style.display = 'none';
    });

    //Пароль
    openModalBtn_pass.addEventListener('click', function () {
        modal2.style.display = 'flex';
    });
    overlay2.addEventListener('click', function () {
        modal2.style.display = 'none';
    });
    acceptBtn_pass.addEventListener('click', function () {
        //отправка данных на сервер.
        document.getElementById('password').value = '';
        document.getElementById('new_password').value = '';
        modal2.style.display = 'none';
    });
  });
  
const inputPass = document.getElementById('password');
const iconPass = document.getElementById('pass-icon');
const newInputPass = document.getElementById('new_password');
const newIconPass = document.getElementById('new_pass-icon');

iconPass.addEventListener('click', () => {
    if (inputPass.getAttribute('type') === "password") {
        inputPass.setAttribute('type', 'text');
        iconPass.innerHTML = '<img src="../image/hide.png" alt="hide">';
    } else {
        inputPass.setAttribute('type', 'password');
        iconPass.innerHTML = '<img src="../image/show.png" alt="show">';
    }
});

newIconPass.addEventListener('click', () => {
    if (newInputPass.getAttribute('type') === "password") {
        newInputPass.setAttribute('type', 'text');
        newIconPass.innerHTML = '<img src="../image/hide.png" alt="hide">';
    } else {
        newInputPass.setAttribute('type', 'password');
        newIconPass.innerHTML = '<img src="../image/show.png" alt="show">';
    }
});