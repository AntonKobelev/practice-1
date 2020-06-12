'use strict';


let numberOfFilms;

function start() { // начало программы
    numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?','');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?','');
    }
}
start(); // вызываем функцию


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// 1. Автоматизировать вопросы пользователю про фильмы при помощи цикла
// 2. Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки, отменить ответ или ввести название фильма длиннее, чем 50 символов. Если это происходит - возвращаем пользователя в вопросам опять. (К любой строке можно обратиться как str.length - получить ее длину)



function rememberMyFilms() { // называем функцию запомнитьМоиФильмы
    // 1 способ - for
    for (let i = 0; i < 2; i++){ 
        const lastFilm = prompt('Один из последних просмотренных фильмов?',''),
            ballFilm = prompt('На сколько оцените его?','');
        if (lastFilm.length == 0 || lastFilm.length == null || lastFilm.length > 50){ //если ввел пустое значение или нажал отмена или длина строки была длиннее 50 символов то уменьшаем i то есть обнуляем итерацию
            i--;
        } else personalMovieDB.movies[lastFilm] = ballFilm; // если все верно то добавляем в объект movies свойство и значение
    }
}

rememberMyFilms();

// 2 способ - while
/*let i = 0;
while (i < 2) {
    const lastFilm = prompt('Один из последних просмотренных фильмов?',''),
          ballFilm = prompt('На сколько оцените его?','');
    if (lastFilm.length == 0 || lastFilm.length == null || lastFilm.length > 50){ //если ввел пустое значение или нажал отмена или длина строки была длиннее 50 символов то уменьшаем i то есть обнуляем итерацию
    i--;
    } else personalMovieDB.movies[lastFilm] = ballFilm; // если все верно то добавляем в объект movies свойство и значение
    i++;
}*/

// 3 способ - do while
/*let i = 0;
do {
    const lastFilm = prompt('Один из последних просмотренных фильмов?',''),
          ballFilm = prompt('На сколько оцените его?','');
    if (lastFilm.length == 0 || lastFilm.length == null || lastFilm.length > 50){ //если ввел пустое значение или нажал отмена или длина строки была длиннее 50 символов то уменьшаем i то есть обнуляем итерацию
    i--;
    } else personalMovieDB.movies[lastFilm] = ballFilm; // если все верно то добавляем в объект movies свойство и значение
    i++;

} while (i < 2);
*/



// 3. При помощи условий проверить personalMovieDB.count, и если он меньше 10 - вывести сообщение "Просмотрено мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

function detectPersonalLevel() { //определитьУровеньКинопросмотренности
    if (personalMovieDB.count > 0 && personalMovieDB.count < 10){
        alert("Просмотрено мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else alert("Произошла ошибка");
}

detectPersonalLevel();

// 4. Потренироваться и переписать цикл еще двумя способами


// 5. Создать функцию showMyDB, которая будет проверять свйоство privat. Если стоит в позиции false - выводит в консоль главный объект программы.

function showMyDB(hidden) {
    if (!hidden) { // если personalMovieDB.privat true, если хотим чтобы if сработал то надо поменять, ставим знак !
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

/* 6. Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных genres.*/

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){ // цикл будем начинать с 1
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); // используем бэктики, ставим $ и {переменная}
        // записываем в БД. Ставим -1 чтобы в массиве фиксировалось с нуля.
    }
}
writeYourGenres(); //вызываем