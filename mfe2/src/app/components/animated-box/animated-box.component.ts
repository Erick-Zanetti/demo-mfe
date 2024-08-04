import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animated-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated-box.component.html',
  styleUrls: ['./animated-box.component.scss']
})
export class AnimatedBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
