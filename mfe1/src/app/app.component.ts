import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

declare global {
  interface Window {
    isShell: boolean;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mfe1';
}
