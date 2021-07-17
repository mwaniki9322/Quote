import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {}

  @HostListener ('hover') onHovers(){
    this.background('rgb(139, 231, 250)')
  }
  @HostListener ('click') onDoubleClicks(){
    this.background('red');
  }
   background(action:string){
     this.elem.nativeElement.style.background=action;
   }
   }


