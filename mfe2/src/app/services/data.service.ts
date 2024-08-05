import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) { }

  fetchData() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1');
  }
}
