import { doc } from 'prettier';
import { uptime } from 'process';

/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';
    button.addEventListener('click', () => button.remove());
    document.body.append(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ul = document.createElement('ul');
    document.body.append(ul);

    arr.forEach((element) => {
        const li = document.createElement('li');
        li.textContent = element;
        li.addEventListener('mouseover', () =>
            li.setAttribute('title', element),
        );
        ul.append(li);
    });
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const a = document.createElement('a');
    a.setAttribute('href', 'https://tensor.ru/');
    a.textContent = 'tensor';
    document.body.append(a);

    a.addEventListener('click', (element) => {
        const link = a.getAttribute('href');
        a.textContent += ' ' + link;
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    document.body.insertAdjacentHTML(
        'beforeend',
        '<ul><li>Пункт</li></ul><button>Добавить пункт</button>',
    );

    const ul = document.querySelector('ul');
    ul.addEventListener(
        'click',
        (element) => (element.target.textContent += '!'),
    );

    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        const li = document.createElement('li');
        li.textContent = 'Пункт';
        ul.append(li);
    });
}
