import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'activityOne';

  // data entry point
  images = [
    { name: 'image6.jpg', imageDescription: 'M4 GT4' },
    { name: 'image8.jpg', imageDescription: 'M4 GT4' },
    { name: 'image7.jpg', imageDescription: 'M4 GT4' },
    { name: 'image9.jpg', imageDescription: 'M4 GT4' },
  ];
}
