import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondsService {

  constructor() { }

  getSeconds() {
    return new Date().getSeconds();
  }

}
