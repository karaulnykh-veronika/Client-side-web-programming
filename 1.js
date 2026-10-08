'use strict';

// 1.1.Проверка,будут ли взаимно просты два натуральных числа
function isCoprime(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a === 1;
}

// 1.2.Проверка,будет ли простым данное натуральное число
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Вспомогательная функция-наибольший общий делитель
function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 1.12.Умножение двух рациональных чисел, ответ-несократимая дробь
function multiplyFractions(a1, b1, a2, b2) {
    let num = a1 * a2;
    let den = b1 * b2;
    let g = gcd(num, den);
    return (num / g) + '/' + (den / g);
}

// 1.13.Сложение двух рациональных чисел, ответ-несократимая дробь
function addFractions(a1, b1, a2, b2) {
    let num = a1 * b2 + a2 * b1;
    let den = b1 * b2;
    let g = gcd(num, den);
    return (num / g) + '/' + (den / g);
}

// 1.14.Числа из N..M, которые делятся на каждую из своих цифр
function divisibleByDigits(n, m) {
    let result = [];
    for (let i = n; i <= m; i++) {
        let num = Math.abs(i);
        let str = String(num);
        let ok = true;
        for (let j = 0; j < str.length; j++) {
            let digit = Number(str[j]);
            if (digit === 0 || num % digit !== 0) {
                ok = false;
                break;
            }
        }
        if (ok) {
            result.push(i);
        }
    }
    return result;
}

// 1.15. Числа из N..M, которые делятся на сумму всех своих цифр
function divisibleByDigitSum(n, m) {
    let result = [];
    for (let i = n; i <= m; i++) {
        let num = Math.abs(i);
        let str = String(num);
        let sum = 0;
        for (let j = 0; j < str.length; j++) {
            sum += Number(str[j]);
        }
        if (sum !== 0 && num % sum === 0) {
            result.push(i);
        }
    }
    return result;
}

// Запуск 

function runTask11() {
    let a = Number(prompt('1.1. Введите первое натуральное число:'));
    let b = Number(prompt('1.1. Введите второе натуральное число:'));
    alert('Числа ' + a + ' и ' + b + (isCoprime(a, b) ? ' взаимно просты' : ' не взаимно просты'));
}

function runTask12() {
    let n = Number(prompt('1.2. Введите натуральное число для проверки на простоту:'));
    alert('Число ' + n + (isPrime(n) ? ' простое' : ' не простое'));
}

function runTask112() {
    let x1 = Number(prompt('1.12. Первая дробь. Введите числитель:'));
    let y1 = Number(prompt('1.12. Первая дробь. Введите знаменатель:'));
    let x2 = Number(prompt('1.12. Вторая дробь. Введите числитель:'));
    let y2 = Number(prompt('1.12. Вторая дробь. Введите знаменатель:'));
    alert('Произведение: ' + multiplyFractions(x1, y1, x2, y2));
}

function runTask113() {
    let p1 = Number(prompt('1.13. Первая дробь. Введите числитель:'));
    let q1 = Number(prompt('1.13. Первая дробь. Введите знаменатель:'));
    let p2 = Number(prompt('1.13. Вторая дробь. Введите числитель:'));
    let q2 = Number(prompt('1.13. Вторая дробь. Введите знаменатель:'));
    alert('Сумма: ' + addFractions(p1, q1, p2, q2));
}

function runTask114() {
    let n = Number(prompt('1.14. Введите начало интервала N:'));
    let m = Number(prompt('1.14. Введите конец интервала M:'));
    let res = divisibleByDigits(n, m);
    alert('Числа от ' + n + ' до ' + m + ', делящиеся на каждую свою цифру:\n' + res.join(', '));
}

function runTask115() {
    let n = Number(prompt('1.15. Введите начало интервала N:'));
    let m = Number(prompt('1.15. Введите конец интервала M:'));
    let res = divisibleByDigitSum(n, m);
    alert('Числа от ' + n + ' до ' + m + ', делящиеся на сумму своих цифр:\n' + res.join(', '));
}