import * as model from './model.js'
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js'

const controlRecipe = async function () {
    try {
        //const id = window.location.hash.slice(1);
        const id = "5ed6604591c37cdc054bc886";
        if(!id) return;

        recipeView.renderSpinner();

        await model.loadRecipe(id);

        recipeView.render(model.state.recipe);
    } catch (err) {
        console.error(err);
    }
}

recipeView.addHandlerRender(controlRecipe);

console.log("Hello world");