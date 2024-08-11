"use strict";
// To show the popup message in case of any error
const ShowMessage = (message) => {
    const popMessageElement = document.getElementById("popup-message");
    popMessageElement.style.display = "grid";
    const popMessageDataElement = document.getElementById("message-data");
    popMessageDataElement.innerText = message;
};
// To hide the popup message
const HideMessage = () => {
    const popMessageElement = document.getElementById("popup-message");
    const resultElement = document.getElementById("result");
    popMessageElement.style.display = "none";
    resultElement.style.display = "none";
};
// To Get the movie details
const GetMovieDetails = () => {
    var _a;
    const movieNameElement = document.getElementById("movie-name");
    let movieName = ((_a = movieNameElement.value) !== null && _a !== void 0 ? _a : "").trim();
    if (movieName.length == 0) {
        ShowMessage("Movie name can't be null. please enter some valid text!");
        return 0;
    }
    const queryUrl = `https://www.omdbapi.com/?t=${movieName}&apikey=851563b9`;
    let jsonresponse = fetch(queryUrl)
        .then((response) => {
        return response.json();
    })
        .then((jsonResponse) => {
        return jsonResponse;
    });
    jsonresponse.then((result) => {
        if (result.Response == "False") {
            ShowMessage(result.Error);
            return 0;
        }
        const resultElement = document.getElementById("result");
        const titleElement = document.getElementById("title");
        const yearElement = document.getElementById("year");
        const runtimeElement = document.getElementById("runtime");
        const genereElement = document.getElementById("genere");
        const plotElement = document.getElementById("plot");
        const posterElement = document.getElementById("poster");
        // load the result
        resultElement.style.display = "flex";
        titleElement.innerText = `Title : ${result.Title}`;
        yearElement.innerText = `Year : ${result.Year};`;
        runtimeElement.innerText = `Runtime : ${result.Runtime}`;
        genereElement.innerText = `Genre : ${result.Genre}`;
        plotElement.innerText = `Plot " ${result.Plot}`;
        posterElement.src = result.Poster;
    });
};
