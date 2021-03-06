const fetchByName = async (type, value) => {
  const numberOfRecepies = 12;
  let url = '';
  if (type === 'foods') {
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
  }
  if (type === 'drinks') {
    url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`;
  }
  const request = await fetch(url);
  const dataByName = await request.json();
  if (type === 'foods') {
    return dataByName.meals;
  } if (type === 'drinks') {
    return dataByName.drinks.slice(0, numberOfRecepies);
  }
};

export default fetchByName;
