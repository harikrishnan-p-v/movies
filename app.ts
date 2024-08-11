// To show the popup message in case of any error
const ShowMessage = (message: string) => {
  const popMessageElement: HTMLDivElement = document.getElementById(
    "popup-message"
  ) as HTMLDivElement;
  popMessageElement.style.display = "grid";
  const popMessageDataElement: HTMLParagraphElement = document.getElementById(
    "message-data"
  ) as HTMLParagraphElement;
  popMessageDataElement.innerText = message;
};

// To hide the popup message
const HideMessage = () => {
  const popMessageElement: HTMLDivElement = document.getElementById(
    "popup-message"
  ) as HTMLDivElement;

  const resultElement: HTMLDivElement = document.getElementById(
    "result"
  ) as HTMLDivElement;
  popMessageElement.style.display = "none";
  resultElement.style.display = "none";
};

// To Get the movie details
const GetMovieDetails = () => {
  const movieNameElement: HTMLInputElement = document.getElementById(
    "movie-name"
  ) as HTMLInputElement;
  let movieName: string = (movieNameElement.value ?? "").trim();

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

    const resultElement: HTMLDivElement = document.getElementById(
      "result"
    ) as HTMLDivElement;

    const titleElement: HTMLParagraphElement = document.getElementById(
      "title"
    ) as HTMLParagraphElement;
    const yearElement: HTMLParagraphElement = document.getElementById(
      "year"
    ) as HTMLParagraphElement;
    const runtimeElement: HTMLParagraphElement = document.getElementById(
      "runtime"
    ) as HTMLParagraphElement;
    const genereElement: HTMLParagraphElement = document.getElementById(
      "genere"
    ) as HTMLParagraphElement;
    const plotElement: HTMLParagraphElement = document.getElementById(
      "plot"
    ) as HTMLParagraphElement;

    const posterElement: HTMLImageElement = document.getElementById(
      "poster"
    ) as HTMLImageElement;

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
