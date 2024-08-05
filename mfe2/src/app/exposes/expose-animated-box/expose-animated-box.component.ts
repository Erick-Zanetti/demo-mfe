import { Component } from '@angular/core';
import { AnimatedBoxComponent } from '../../components/animated-box/animated-box.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-expose-animated-box',
  standalone: true,
  imports: [AnimatedBoxComponent],
  providers: [DataService],
  templateUrl: './expose-animated-box.component.html',
  styleUrl: './expose-animated-box.component.scss'
})
export class ExposeAnimatedBoxComponent {

}
