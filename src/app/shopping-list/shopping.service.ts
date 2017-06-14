import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
export class ShoppingService {
    private ingredients: Ingredient[] = [new Ingredient(' Apple', 10), new Ingredient('Banana', 5)];
    IngredinChanged = new EventEmitter<Ingredient[]>();
    getIngredints() {
        return this.ingredients.slice();
    }
    addIng(ingredient) {
        this.ingredients.push(ingredient);
        this.IngredinChanged.emit(this.ingredients.slice())
    }
    addIngList(ingredients) {
        // for (let ingredint of ingredients) {
        //     this.ingredients.push(ingredint);
        // }
        this.ingredients.push(... ingredients);
        this.IngredinChanged.emit(this.ingredients.slice())

    }
}