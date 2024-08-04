import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AnimatedBoxComponent } from '../../components/animated-box/animated-box.component';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [CommonModule, AnimatedBoxComponent],
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
