import { Recipe } from "./recipe.js";

export class RecipeBook {
  recipes = [];
  addRecipe(...arrOfRecipes) {
    for (const recipe of arrOfRecipes) {
      if (recipe instanceof Recipe && recipe.isValideProps()) {
        this.recipes.push(recipe);
      } else {
        console.log(`Your "${recipe.title ? recipe.title : recipe}" recipe is not valid. I can't add it to this book`);
      }
    }
  }
  findByTime(time) {
    if (this.recipes.length !== 0) {
      return this.recipes.filter((r) => r.time <= time);
    } else {
      console.log("There are no recipes in yor book");
    }
  }
  findByIngridients(...ingridients) {
    if (this.recipes.length !== 0) {
      const filteredRecipes = [];
      this.recipes.forEach((recipe) => {
        if (ingridients.every(ingridient => recipe.ingridients.includes(ingridient))) {
          filteredRecipes.push(recipe);
        }
      });
      return filteredRecipes;
    } else {
      console.log("There are no recipes in yor book");
    }
  }
}
