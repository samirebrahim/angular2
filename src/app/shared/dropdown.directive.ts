import { Directive, ElementRef, Renderer2, HostListener ,HostBinding} from "@angular/core";
@Directive({
    selector: '[dropDownDirective]'
})
export class DropDownDirective {
    // constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  @HostBinding ('class.open')  toggleOpen: boolean= false;
    @HostListener('click') clicked(eventData: Event) {
        this.toggleOpen= !this.toggleOpen;
        // this.toggleOpen = this.elementRef.nativeElement.classList.contains('open');
        // if (!this.toggleOpen) {
        //     // console.log(this.renderer);
        //     this.renderer.addClass(this.elementRef.nativeElement, 'open');
        // }
        // else {
        //     this.renderer.removeClass(this.elementRef.nativeElement, 'open');

        // }
    }
}