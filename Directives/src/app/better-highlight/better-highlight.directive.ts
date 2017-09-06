import {Directive, OnInit, ElementRef, Renderer, HostListener, HostBinding, Input} from '@angular/core';
@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer) {}

  @Input() defaultColor: string = 'blue';
  @Input() highlightColor: string = 'pink';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue', false, false);
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue', false, false);
    this.backgroundColor = this.highlightColor;
}

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink', false, false);
    this.backgroundColor = this.defaultColor;
  }
}
