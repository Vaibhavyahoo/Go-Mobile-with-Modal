import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService} from '../auth.service';
import 'rxjs/add/operator/do';
@Injectable()
export class ShowDataService {
  items: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire,private authService: AuthService) {
    this.items = af.database.list('/mobile');

  }

getItems(){

  console.log(this.items);
  return this.items;
}

}
