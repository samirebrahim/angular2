
import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";
@Injectable()
export class RecipesService {
    recibeSelected = new EventEmitter<Recipe>();
    constructor(private shoppingService: ShoppingService) { }
    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('Big Fat Burger',
            'What else you need to say?',
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])];

    getRecipes() {
        return this.recipes.slice();
    }
    selectedRecibe(recibe) {
        this.recibeSelected.emit(recibe);
    }
    addIngredint(ingredints: Ingredient[]) {

        this.shoppingService.addIngList(ingredints);
    }
}