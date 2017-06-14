import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recibeSelectedList = new EventEmitter<Recipe>();
  recipes: Recipe[] = [new Recipe('a test recipe', 'this is a simple test',
    'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'
  ), new Recipe('a test recipe', 'this is a simple test',
    'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'
  )];
  constructor() { }
  recibeToSend(recipe) {
    this.recibeSelectedList.emit(recipe)
  }
  ngOnInit() {
  }

}
