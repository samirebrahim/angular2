import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from "@angular/forms";
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BasicHiglghtDirective } from './basic-higlght.directive';
import { BetterHiglghtDirective } from './better/better-higlght.directive';
import { DropDownDirective } from "./shared/dropdown.directive";
import { ShoppingService } from "./shopping-list/shopping.service";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicHiglghtDirective,
    BetterHiglghtDirective,
    DropDownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShoppingService] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
