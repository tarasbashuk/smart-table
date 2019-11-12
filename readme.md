Тестове завдання на позицію
Front-End Developer

deploy - https://smart-tables.herokuapp.com/

Завдання:

Потрібно написати таблицю, за функціоналом схожу до табличок в програмі Excel.

Тобто, написаний веб додаток має являти собою вікно, де є таблиця, в клітинки якої можна записувати числа, рядки, грошові суми, посилання і формули.

Повинен також бути рядок, в якому ми будемо бачити формальний запис вмісту клітинки, на яку клікнули. Наприклад. Є клітинка з координатами (1,4), в ній записане посилання https://leeloo.ai. Тоді в цьому рядку має бути виведено щось типу =HYPER(‘https://leeloo.ai’).

Ось формули, які потрібно реалізувати:
	сумма чисел в клітинках ( =SUM(…) допустимі 	типи – числа і грошові суми. Числа до грошей додавати не можна. Лише гроші до грошей і числа до чисел.)
	середнє арифметичне вибраних клітинок ( =AVERAGE(…), умови такі ж.)
	конкатенація рядків у вибраних клітинок 	( =CONCAT(…), конкатенувати можна різні типи даних. Вони просто приводяться до рядка. )
	гіперпосилання ( =HYPER(…) , повинна бути валідація на те, що посилання валідне. Наприклад: https://asdasdasd.asd – хоч і не дійсне посилання, але семантика підходить, asd://asdsad----asd-asd-asd – не валідне посилання).

Якщо у формулу попадає клітинка з недопустимим типом даних – потрібно показати повідомлення про помилку.

Грошові суми потрібно реалізувати наступним чином:
формат запису: 1 300 000,00 – цілу частину необхідно розбити на трійки цифер. Дробова частина має завжди складатися з 2 знакіів після коми (не більше і не менше).
Також має бути можливість вказати валюту.

Необхідно використати наступні технології: React I Redux. Для компонент, які потенційно можуть бути класами (не обов’язково для всіх), використати нову можливість в React - Hooks (https://reactjs.org/docs/hooks-intro.html)

Все інше по бажанню і необхідності. Також треба налаштувати збірку статика в бандл за допомогою webpack/gulp/grunt.
Результати роботи потрібно розмістити на github або bitbucket і задеплоїти на heroku, github-pages, або інший сервіс.

Надіслати потрібно 2 посилання - на репозиторій з кодом, і на задеплоєний проект.


БОНУСНЕ ЗАВДАННЯ:
якщо фокус курсора стоїть на клітинці, в якій записано посилання, то десь на екрані зн’являється область Прев’ю, в якій ми бачимо невелике зображення сторінки, на яку веде посилання, або повідомлення про те, що превю недоступне. Для клітинок з іншими формулами і типами ця область не повинна показуватися.

