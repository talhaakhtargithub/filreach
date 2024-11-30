import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  placeholderText = '';
  originalPlaceholder = 'Define "Personalized Outreach" ';
  currentIndex = 0;
  writing = true; // Flag to track if we are writing or deleting
  private subscription: Subscription | undefined;

  ngOnInit() {
    this.animatePlaceholder();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  animatePlaceholder() {
    const writingSpeed = 100; // Time in milliseconds for each character
    const pauseDuration = 1000; // Pause for 1 second after writing completes

    this.subscription = interval(writingSpeed).subscribe(() => {
      if (this.writing) {
        if (this.currentIndex < this.originalPlaceholder.length) {
          this.placeholderText += this.originalPlaceholder[this.currentIndex];
          this.currentIndex++;
        } else {
          this.writing = false; // Writing completed
          setTimeout(() => {
            this.currentIndex = 0; // Reset for writing
            this.placeholderText = ''; // Clear placeholder
            this.writing = true;
          }, pauseDuration); // Pause before resetting
        }
      }
    });
  }



  scrollToSection() {
    document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
  }

}
