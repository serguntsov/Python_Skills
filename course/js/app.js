document.addEventListener('DOMContentLoaded', function () {
    var mainMenuItems_0 = document.querySelectorAll('.chapter-0');
    mainMenuItems_0.forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
            var submenu = menuItem.querySelector('ul');
            var chapter1 = document.querySelector('.chapter-1');
            // Проверяем, отображено ли подменю
            var isVisible = window.getComputedStyle(submenu).display === 'block';
            // Скрываем все подменю
            var submenus = document.querySelectorAll('.lectures nav ul li ul');
            submenus.forEach(function (otherSubmenu) {
                otherSubmenu.style.display = 'none';
            });
            // Если подменю не было видно, отображаем его; иначе скрываем
            submenu.style.display = isVisible ? 'none' : 'block';
            // Если выбран пункт "Глава 1. Введение в Python", изменяем отступ класса chapter-1
            if (menuItem === mainMenuItems_0[0]) {
                chapter1.style.marginTop = isVisible ? '0' : '163px';
            }
        });
    });
});
