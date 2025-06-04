import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// The root component that serves as the main container for the application
@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
