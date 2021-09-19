import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[appToolTippy]'
})
export class ToolTippyDirective implements AfterViewInit {
  @Input('appToolTippy') tippyContent: string;

  constructor(
    private Element: ElementRef,
  ) { }

  ngAfterViewInit() {
    tippy(this.Element.nativeElement, {
      content: this.tippyContent
    })
  }

}
