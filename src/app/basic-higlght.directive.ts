import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHiglght]'
})
export class BasicHiglghtDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor='green';
  }
}
