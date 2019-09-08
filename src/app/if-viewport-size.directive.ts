import { Directive, ElementRef, AfterViewInit, Input, TemplateRef, ViewContainerRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ifViewportSize]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class IfViewportSizeDirective implements AfterViewInit {
  constructor(private templateRef: TemplateRef<any>, 
    private viewContainer: ViewContainerRef,
    private element: ElementRef, private renderer: Renderer2) {
  }
  @Input() set ifViewportSize(condition: string) {
    console.log(condition)
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
}
  ngAfterViewInit() {
  }
  onMouseEnter() {
    this.setFontWeight("bold");
  }
  onMouseLeave() {
    this.setFontWeight("normal");
  }
  private setFontWeight(val: string) {
    this.renderer.setStyle(this.element.nativeElement, "font-weight", val);
  }


}
