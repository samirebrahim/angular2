import { Directive,ElementRef,Renderer2 ,OnInit,HostListener} from '@angular/core';

@Directive({
  selector: '[appBetterHiglght]'
})
export class BetterHiglghtDirective implements OnInit {

  constructor(private eleref:ElementRef,private renderer:Renderer2) { }
  ngOnInit(){
    // this.renderer.setStyle(this.eleref.nativeElement,'background-color','red')
  }
  @HostListener('mouseenter') mouseover(eventData: Event){
    this.renderer.setStyle(this.eleref.nativeElement,'background-color','red')

  }
   @HostListener('mouseleave') samir(eventData: Event){
     console.log(eventData);
    this.renderer.setStyle(this.eleref.nativeElement,'background-color','transparent')

  }
}
