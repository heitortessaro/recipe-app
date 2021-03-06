const fetchIngredients = async (type) => {
  let url = '';
  if (type === 'foods') { url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list'; }
  if (type === 'drinks') { url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'; }
  try {
    const resolve = await fetch(url);
    const data = await resolve.json();
    return { status: 'ok', data };
  } catch (error) {
    console.log('fetchIngredients error');
    return { status: 'error', data: error };
  }
};

export default fetchIngredients;
