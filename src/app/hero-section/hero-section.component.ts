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
    const writingSpeed = 50; // Time in milliseconds for each character
    const deletingSpeed = 50; // Time in milliseconds for deleting each character

    this.subscription = interval(writingSpeed).subscribe(() => {
      if (this.writing) {
        if (this.currentIndex < this.originalPlaceholder.length) {
          this.placeholderText += this.originalPlaceholder[this.currentIndex];
          this.currentIndex++;
        } else {
          this.writing = false; // Start deleting after finishing writing
          this.currentIndex--; // Adjust index for deleting
        }
      } else {
        if (this.currentIndex >= 0) {
          this.placeholderText = this.placeholderText.slice(0, this.currentIndex);
          this.currentIndex--;
        } else {
          this.writing = true; // Start writing again
          this.currentIndex = 0; // Reset index for writing
        }
      }
    });
  }
}
