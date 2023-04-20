import { Directive, Component, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[evenClass]',
})
export class EvenClassDirective implements OnInit {
  @Input() evenClass: string = '';
  constructor(private element: ElementRef) {}
  ngOnInit() {
    this.element.nativeElement.classList.add(this.evenClass);
  }
}
