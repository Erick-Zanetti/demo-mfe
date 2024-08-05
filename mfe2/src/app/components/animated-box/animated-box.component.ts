import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-animated-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated-box.component.html',
  styleUrls: ['./animated-box.component.scss']
})
export class AnimatedBoxComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchData().subscribe((data) => {
      console.log("AnimatedBoxComponent:" + JSON.stringify(data));
    });
  }

}
