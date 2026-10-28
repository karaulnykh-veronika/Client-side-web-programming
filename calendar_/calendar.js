'use strict';

const MONTHS = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];
const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

function buildCalendar() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth(); // 0..11

    // Заголовок
    document.getElementById('title').textContent =
        MONTHS[month] + ' ' + year;

    // Первый день месяца: getDay() даёт 0=Вс..6=Сб
    // Приводим к 0=Пн..6=Вс
    let firstDay = new Date(year, month, 1).getDay();
    firstDay = (firstDay + 6) % 7;

    // Количество дней в месяце
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Создаём таблицу
    const table = document.createElement('table');
    table.classList.add('calendar-table');

    // Шапка с днями недели
    const thead = document.createElement('thead');
    const headRow = document.createElement('tr');
    WEEKDAYS.forEach(function (name) {
        const th = document.createElement('th');
        th.textContent = name;
        headRow.append(th);
    });
    thead.append(headRow);
    table.append(thead);

    // Тело таблицы
    const tbody = document.createElement('tbody');
    let row = document.createElement('tr');

    // Пустые ячейки до первого дня
    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement('td');
        row.append(empty);
    }

    // Ячейки с числами
    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement('td');
        cell.textContent = day;

        // Подсветка сегодняшнего дня
        if (day === now.getDate()) {
            cell.classList.add('today');
        }

        row.append(cell);

        // Если суббота (6-й столбец, индекс 6) — закрываем строку
        const cellIndex = firstDay + day - 1;
        if (cellIndex % 7 === 6) {
            tbody.append(row);
            row = document.createElement('tr');
        }
    }

    // Добиваем последнюю строку пустыми ячейками
    if (row.children.length > 0) {
        while (row.children.length < 7) {
            row.append(document.createElement('td'));
        }
        tbody.append(row);
    }

    table.append(tbody);
    document.getElementById('calendar').append(table);
}

buildCalendar();