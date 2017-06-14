import { Component, OnInit } from '@angular/core';
import { ShoppingService } from "./shopping.service";
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredints();
    this.shoppingService.IngredinChanged.subscribe(
      (ingredints: Ingredient[]) => {
        this.ingredients = ingredints;

      }
    )
  }

}
