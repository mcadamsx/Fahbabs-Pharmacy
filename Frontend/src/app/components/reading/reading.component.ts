import { Component } from '@angular/core';

@Component({
  selector: 'app-reading',
  standalone: true,
  imports: [],
  templateUrl: './reading.component.html',
  styleUrl: './reading.component.css'
})
export class ReadingComponent {
  category = "Web Development";
  courseName = "course Name";
  tutor = "tutor";
  duration = "duration"

}
