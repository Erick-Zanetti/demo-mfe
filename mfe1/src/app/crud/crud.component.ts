import { loadRemoteModule } from '@angular-architects/native-federation';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomRouterLinkDirective } from '../directives/custom-router-link.directive';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [RouterModule, CustomRouterLinkDirective],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent implements OnInit {

  @ViewChild('placeAnimatedBox', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  constructor() { }
  ngOnInit() {
    setTimeout(() => {
      this.loadAnimatedBox()
    }, 2000);
  }

  async loadAnimatedBox(): Promise<void> {

    const m = await loadRemoteModule({
      remoteEntry: 'http://localhost:4202/remoteEntry.json',
      exposedModule: './AnimatedBox'
    });

    const ref = this.viewContainer.createComponent(m.AnimatedBoxComponent);
    // const compInstance = ref.instance;
  }
}
