import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingService } from "../../shopping-list/shopping.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
   @ViewChild('ingName') ingName:ElementRef;
  @ViewChild('ingAmount') ingAmount:ElementRef;
  constructor(private shoppingService: ShoppingService) { }
  addIng() {
     const ingName = this.ingName.nativeElement.value;
    const ingAmount =  this.ingAmount.nativeElement.value;
    const newIngred= new Ingredient(ingName,ingAmount);
    this.shoppingService.addIng(newIngred);
  }
  ngOnInit() {
  }

}
