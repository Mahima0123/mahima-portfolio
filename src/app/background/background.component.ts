import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent {
  @ViewChild('backgroundSection', { static: true }) backgroundSection!: ElementRef;

  constructor() { }

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.backgroundSection.nativeElement.classList.add('slide-in');
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    observer.observe(this.backgroundSection.nativeElement);
  }
}
