import * as model from './model.js'

const controlRecipe = async function () {
    try {
        const id = window.location.hash.slice(1);
        if(!id) return;

        recipeView.renderSpinner();

        await model.loadRecipe(id);

        console.log(model.state);
    } catch (err) {
        console.error(err);
    }
}

//controlRecipe();cd 