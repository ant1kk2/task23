import { Recipe } from "./recipe.js";
import { RecipeBook } from "./recipeBook.js";

const recipe1 = new Recipe(
  "Борщ",
  ["буряк", "капуста", "цибуля"],
  "Смакота",
  50
);
const recipe2 = new Recipe(
  "Суп",
  ["картопля", "капуста", "цибуля"],
  "Ну таке",
  80
);
const recipe3 = new Recipe(
  "Салат",
  ["картопля", "капуста", "морква"],
  "Не пробував",
  150
);
const recipe4 = new Recipe(
  "Морський",
  ["лимон", "креветки", "мідії"],
  "Смакота",
  30
);
const recipe5 = new Recipe(
  "Олів`є",
  ["картопля", "горошок", "ковбаса"],
  "Ну таке",
  60
);
const recipe6 = new Recipe(
  "Шуба",
  ["буряк", "риба", "морква", "ковбаса", "картопля"],
  "Смакота",
  120
);
const invalidRecipe = new Recipe(
  "А я невалідна їжа. Думала проскочу",
  ["картопля", "капуста", "морква"],
  "Не пробував",
  "150"
);

const recipesBook = new RecipeBook();

recipesBook.addRecipe(
  recipe1,
  recipe2,
  recipe3,
  recipe4,
  recipe5,
  recipe6,
  invalidRecipe
);

const filteredByTimeRecipes = recipesBook.findByTime(60);
console.log("Назви рецептів, які готуються швидше 60 хвилин -" + filteredByTimeRecipes?.map((r) => " " + r.title));

const filteredByIngridientsRecipes = recipesBook.findByIngridients("картопля","морква");
console.log("Назви рецептів за фільтром -" + filteredByIngridientsRecipes?.map((r) => " " + r.title));
