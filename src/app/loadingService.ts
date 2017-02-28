import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {
  constructor(private http: Http) { }
  getPeople() {
    return this.http.get('https://angular2-c3375.firebaseio.com/.json')
      .map(response => response.json());
  }
}
