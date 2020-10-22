// Чтобы выбрать какой-то элемент или группу элементов используются селекторы
// Селектор - это строка, которая описывает характеристики html элемента
// 1. Селектор по тегу:     <div>               => 'div'
// 2. Селектор по классу:   <div class="block"> => '.block'
// 3. Селектор по id:       <div id="block">    => '#block'
// 4. Селектор по атрибуту: <input type="text"> => '[type=text]'
// 5. Кобинация селекторов:                     => 'input.name[type=text]'

// Поиск элементов в DOM
//let el = document.querySelector('div');

const el = document.querySelector('.last');
console.log(el);
el.style.color = 'red';
