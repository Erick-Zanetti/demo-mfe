import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomNavigateService {

  private SHELL_ROUTE = 'mfe1/'
  private _navigation = signal(false);
  private _navigation$!: Observable<boolean>;

  get navigation(): Observable<boolean> {
    return this._navigation$;
  }

  constructor(
    private router: Router
  ) {
    this._navigation$ = toObservable(this._navigation);
  }

  navigate(route: string, extras?: NavigationExtras) {
    if (window.isShell) {
      window.dispatchEvent(new CustomEvent('childRouteChanged', { detail: { route: `${this.SHELL_ROUTE}${route}`, extras } }));
    } else {
      this.router.navigate([route], extras);
    }
    this._navigation.set(true);
  }
}
