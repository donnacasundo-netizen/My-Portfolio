import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
<<<<<<< HEAD
<<<<<<< HEAD
  protected readonly title = signal('My-Portfolio');
=======
  protected readonly title = signal('my-angular-app');
>>>>>>> 9120095 (initial commit)
=======
  protected readonly title = signal('My-Portfolio');
>>>>>>> master
}
