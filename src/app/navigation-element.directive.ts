import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appNavigationSection]'
})
export class NavigationElementDirective {

  /**
   * Event raised when the area comes into view.
   */
  @Output() public sectionVisible = new EventEmitter();

  /**
   * Internal reference to the HTML element.
   */
  private element: HTMLElement;

  /**
   * Constructor. Captures a reference to the element.
   */
  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  /**
   * Event callback for when the window loads. This is a workaround for forcing
   * the underlying component to get the currently visible area as the page
   * renders, as this is not possible in the constructor.
   */
  @HostListener('window:load', ['$event'])
  public onLoad(evt: Event): void {
    this.updateVisibility();
  }

  /**
   * Event callback for when the window scrolls.
   */
  @HostListener('window:scroll', ['$event'])
  public onScroll(evt: Event): void {
    this.updateVisibility();
  }

  /**
   * Main method to notify the underlying component that an area has come into
   * focus.
   *
   * @todo: Somehow control how this is called. For each element with this
   * directive appearing on screen, this method is called and the event will be
   * fired. That means that this will be called multiple times and the last
   * element on screen wins.
   */
  private updateVisibility(): void {
    // Sanity check
    if (!this.element) {
      return;
    }

    const scrollAmount = window.pageYOffset;
    const boundingBox = this.element.getBoundingClientRect();
    console.log('scroll', scrollAmount);
    console.log(boundingBox.top);
    console.log(boundingBox.bottom);
    const isInView = scrollAmount >= boundingBox.top
                // && ((scrollAmount - boundingBox.top)/boundingBox.top) >= 0.3
                && scrollAmount < boundingBox.bottom

    if (isInView) {
      this.sectionVisible.emit(this.element.getAttribute('id'));
    }
  }

}