const url =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

const resultcontainer = document.querySelector(".results");

async function getcocktails() {
  // fetch

  const response = await fetch(url);

  const results = await response.json();

  const strDrinks = results.drinks;

  for (let i = 0; i < strDrinks.length; i++) {
    console.log(strDrinks[i].strDrink);

    resultcontainer.innerHTML += `<div class="results">${strDrinks[i].strDrink}</div>`;
  }
}

getcocktails();
