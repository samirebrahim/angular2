import { Component, OnInit, EventEmitter, Output,ElementRef,ViewChild } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() createdIng = new EventEmitter<Ingredient>();
  @ViewChild('ingName') ingName:ElementRef;
  @ViewChild('ingAmount') ingAmount:ElementRef;
  constructor() { }
  addIng() {
   this.createdIng.emit(new Ingredient(this.ingName.nativeElement.value, this.ingAmount.nativeElement.value));

  }
  ngOnInit() {
  }

}
