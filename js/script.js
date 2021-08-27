"use strict";
// .................................................1 задание
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//.................................................2 задание
const personalMovieDB = {
        count: numberOfFilms,
        movies:{},
        actors: {},
        genres: [],
        privat: false
};

//.............................................3 задание

const a = prompt("Один из просмотренных фильмов", ''),
      b = prompt("На сколько оцените его?", ''),
      c = prompt("Один из просмотренных фильмов", ''),
      d = prompt("На сколько оцените его?", '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


//..............................................Условия

if (4==4) {
        console.log('ok');
} else {
        console.log('error');
}



// if(num < 49) {
//         console.log('error');
// } else if (num > 100) {
//         console.log('many')
// } else {
//         console.log('ok')
// }

// (num === 50) ?console.log('ok') : console.log('error');//на тернарном

const num =50;
switch (num) {
        case 49:
                console.log('неверно');
                break;
        case 100:
                console.log('неверно');
                break;
        case 50: 
                console.log('great');
                break;

        default:
                console.log('не в этот раз');
                break


}