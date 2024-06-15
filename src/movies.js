import { movies } from "./data.js";

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arrayMovies) {

    let director = arrayMovies.map((nameDirector)=> {
        return nameDirector.director
    })
    return director
}
console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// function unitedDirectors (director) {
    
//     const removeDuplicate = director.forEach(element => {
//         if (!removeDuplicate.includes(element)) {
//             removeDuplicate.push(element)
//     }
// });
// }
// console.log(unitedDirectors(getAllDirectors(movies)));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (arrayMovies) {

    const moviesStevenSpielberg = arrayMovies.filter((arrayMovies) => {
        return(
        arrayMovies.director === 'Steven Spielberg' && arrayMovies.genre.includes('Drama') === true);});
    return moviesStevenSpielberg
}
console.log(howManyMovies(movies));


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(arrayMovies) {

    const addScore = arrayMovies.reduce((acc , movie) => {
        
    return acc + movie.score;}, 0);
        
    let average = addScore / arrayMovies.length;

    return average.toFixed(2);
        
}
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(arrayMovies) {

    const arrayFilm = arrayMovies.filter((movie) => {
        return movie.genre.includes("Drama");
    });
    console.log(arrayFilm);

    const dramaAverageSum = arrayMovies.reduce((acc,curr) =>{

        return acc + curr.score;

    }, 0);
    console.log(dramaAverageSum);

    const dramaAverage = (dramaAverageSum/arrayFilm.length).toFixed(2);

    return dramaAverage

}

console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const copyMovies = [].concat(movies)

function orderByYear(arrayMovies) {

    copyMovies.sort((a, b) => {
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;

        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    });

    return copyMovies;
}
console.log(orderByYear(copyMovies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const copyCopyMovies = [].concat(movies)

function orderAlphabetically(arrayMovies) {

    copyCopyMovies.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    });
    return copyCopyMovies.slice(0,20)
} 
console.log(orderAlphabetically(copyCopyMovies));


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
