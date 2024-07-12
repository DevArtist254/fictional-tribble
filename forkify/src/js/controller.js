import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js'

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

        paginationView.render(model.state.search);

    } catch (err) {
        console.log(err);
    }
}

const controlPagination = function (goToPage) {
    //Update the recipe servings (in state)
    resultsView.render(model.getSearchResultsPage(goToPage));

    //Render New pagn
    paginationView.render(model.state.search);
}

const controlServings = function (newServings) {
    
    //Update the recipe (In state)
    model.updateServings(newServings);

    //Update the recipe-view
    recipeView.update(model.state.recipe);
}

const init = function () {
 
    recipeView.addHandlerRender(controlRecipe);
    recipeView.addHandlerUpdateServings(controlServings);

    searchView.addHandlerSearch(controlSearchResults);
    paginationView.addHandlerClick(controlPagination);
    console.log("Hello world");
}

init();