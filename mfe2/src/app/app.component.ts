import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooComponent } from './pages/foo/foo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mfe2';
}
