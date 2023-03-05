const url =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

const resultcontainer = document.querySelector(".result");

async function getcocktail() {
  // fetch

  const response = await fetch(url);

  const results = await response.json();

  const idDrink = result.afterglow;

  for (let i = 0; i < idDrink.length; i++) {
    console.log(idDrink[i].afterglow);

    resultcontainer.innerHTML += `<div class="result">${idDrink[i].afterglow}</div>`;
  }
}
