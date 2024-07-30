import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { CustomNavigateService } from '../services/custom-navigate.service';

@Directive({
  selector: '[customRouterLink]',
  standalone: true
})
export class CustomRouterLinkDirective implements OnInit {
  @Input() customRouterLink: any;
  @Input() routerLinkActive: string = "";
  @Input() queryParams: any;

  constructor(
    private customNavigateService: CustomNavigateService,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.watchNavigation();
    this.verifyActive();
  }

  @HostListener('click')
  navigate(): void {
    this.customNavigateService.navigate(this.customRouterLink, { queryParams: this.queryParams });
  }

  watchNavigation(): void {
    this.customNavigateService.navigation.subscribe(() => {
      this.verifyActive();
    });
  }

  verifyActive(): void {
    if (this.routerLinkActive) {
      if (window.location.pathname === this.customRouterLink) {
        this.el.nativeElement.classList.add(this.routerLinkActive);
      } else {
        this.el.nativeElement.classList.remove(this.routerLinkActive);
      }
    }
  }
}
