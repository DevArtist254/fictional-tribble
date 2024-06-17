import {API_URL, RES_PER_PAGE, KEY} from './config.js';
import { AJAX } from './helpers.js'

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPage:RES_PER_PAGE,
    },
    bookmarks: []
}

const createRecipeObject = function (data) {
    const {recipe} = data.data;
    return {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
      ...(recipe.key && { key: recipe.key}),
    };
}

export const loadRecipe = async function (id) {
    try {
        const data = await AJAX(`${API_URL}${id}?key=${KEY}`)
        state.recipe = createRecipeObject(data);

        console.log(state.recipe);
    } catch (err) {
      // Temp error handling
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
}