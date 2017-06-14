import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipesService } from "../recipes.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recibeService: RecipesService) { }
  addRecibe() {
    this.recibeService.addIngredint(this.recipe.ingredints);
  }
  ngOnInit() {
  }

}
