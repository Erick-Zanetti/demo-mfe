import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomRouterLinkDirective } from '../directives/custom-router-link.directive';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [RouterModule, CustomRouterLinkDirective],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent {

}
