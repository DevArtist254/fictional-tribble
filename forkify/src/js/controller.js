import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

import "core-js/stable";
import "regenerator-runtime/runtime";

const controlRecipe = async function () {
    try {
        const id = window.location.hash.slice(1);
        if(!id) return;

        recipeView.renderSpinner();

        await model.loadRecipe(id);

        recipeView.render(model.state.recipe);
    } catch (err) {
        recipeView.renderError();
        console.error(err);
    }
}

const controlSearchResults = async function () {
    try {
        recipeView.renderSpinner();

        const query = searchView.getQuery();
        if(!query) return;

        console.log(query);
        await model.loadSearchResults(query);

        resultsView.render(model.getSearchResultsPage());

    } catch (err) {
        
    }
}

recipeView.addHandlerRender(controlRecipe);
searchView.addHandlerSearch(controlSearchResults);

console.log("Hello world");