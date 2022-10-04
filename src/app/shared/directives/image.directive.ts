import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImage]',
})
export class ImageDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'height', '100vh');
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-image',
      'url(https://mdbootstrap.com/img/new/fluid/city/008.jpg)'
    );
  }
}
