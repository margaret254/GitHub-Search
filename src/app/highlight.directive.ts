import { ProfileComponent } from './components/profile/profile.component';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor = '#E5FBED';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('cyan');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = 'color';
  }
}
