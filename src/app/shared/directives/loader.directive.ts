import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLoader]',
})
export class LoaderDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'position', 'absolute');
    this.renderer.setStyle(this.element.nativeElement, 'min-width', '100%');
    this.renderer.setStyle(this.element.nativeElement, 'min-height', '100%');
    this.renderer.setStyle(
      this.element.nativeElement,
      'justify-content',
      'center'
    );
    this.renderer.setStyle(this.element.nativeElement, 'align-items', 'center');
    this.renderer.setStyle(this.element.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.element.nativeElement, 'z-index', '99');
  }
}
