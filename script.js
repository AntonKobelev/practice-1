// 1. Создать переменную numberOfFilms и в нее поместить ответ от пользователя на вопрос: "Cколько фильмов вы уже посмотрели?"
const numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?','');

/* 2. Создать объект personalMovieDB и в него поместить свойства:
- count - сюда передается ответ на первый вопрос
- movies - в это свойство поместить пустой объект
- actors - поместить пустой объект
- genres - сюда поместить пустой массив
- privat - в это свойство поместить boolean значение false
*/

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* 3. Задайте пользователю по 2 раза вопросы:
- 'Один из последних просмотренных фильмов?'
- 'На сколько оцените его?'
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }
*/

for (i = 0; i < 2; i++){
    const lastFilm = prompt('Один из последних просмотренных фильмов?',''),
          ballFilm = prompt('На сколько оцените его?','');
    personalMovieDB.movies[lastFilm] = ballFilm;
}

console.log(personalMovieDB);
