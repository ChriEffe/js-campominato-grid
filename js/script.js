/*L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.*/


let play = document.querySelector('button');
play.addEventListener('click', function () {
    let level = document.querySelector("select");
    let active = document.querySelector(".hidden");
    let grid = document.querySelector(".grid");

    if (level.value == 'easy') {
        grid.innerHTML = "";
        active.classList.add("active");
        let row = 10;
        let col = 10;
        let numberSquareEasy = row * col;
        let numbersEasy = [];
 
        for (let i = 0; i < numberSquareEasy; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `calc(100% / ${col})`;
            square.style.height = `calc(100% / ${row})`;
            numbersEasy.push(i + 1);
            square.append(numbersEasy[i]);
            // click celle
            square.addEventListener('click', function () {
                square.style.backgroundColor = 'blue';
            })
            grid.append(square);
        }
    } else if (level.value == 'medium') {
        grid.innerHTML = "";
        active.classList.add("active");
        let rowM = 9;
        let colM = 9;
        let numberSquareMedium = rowM * colM;
        let numbersMedium = [];

        for (let i = 0; i < numberSquareMedium; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `calc(100% / ${colM})`;
            square.style.height = `calc(100% / ${rowM})`;
            numbersMedium.push(i + 1);
            square.append(numbersMedium[i]);
            // click celle
            square.addEventListener('click', function () {
                square.style.backgroundColor = 'blue';
            })
            grid.append(square);
        }
    } else {
        grid.innerHTML = "";
        active.classList.add("active");
        let rowH = 7;
        let colH = 7;
        let numberSquareHard = rowH * colH;
        let numbersHard = [];

        for (let i = 0; i < numberSquareHard; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `calc(100% / ${colH})`;
            square.style.height = `calc(100% / ${rowH})`;
            numbersHard.push(i + 1);
            square.append(numbersHard[i]);
            // click celle
            square.addEventListener('click', function () {
                square.style.backgroundColor = 'blue';
            })
            grid.append(square);
        }
    }
})



