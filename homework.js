"use strict" ;

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?" , "") ;

const personalMovideDB = {
             count: numberOfFilms ,
             movies: {},
             actors: {},
             genres: [],
             privat:false 
};

const a = prompt('Один из последних просмотренных фильмов?', '') ,
      b = prompt('Оцените фильм','') ,
      c = prompt('Один из последних просмотренных фильмов?', '') ,
      d = prompt('Оцените фильм' , '') ;

personalMovideDB.movies[a] = b ;
personalMovideDB.movies[c] = d ;

console.log(personalMovideDB) ;


