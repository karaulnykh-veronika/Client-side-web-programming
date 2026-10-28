'use strict';

function buildMultiplicationTable() {
    const table = document.createElement('table');
    table.classList.add('mult-table');

    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');
        for (let j = 1; j <= 10; j++) {
            const cell = document.createElement('td');
            cell.textContent = i + ' × ' + j + ' = ' + (i * j);
            // Подсветка заголовков строк/столбцов
            if (i === 1 || j === 1) {
                cell.classList.add('header-cell');
            }
            row.append(cell);
        }
        table.append(row);
    }

    document.getElementById('mult').append(table);
}

buildMultiplicationTable();