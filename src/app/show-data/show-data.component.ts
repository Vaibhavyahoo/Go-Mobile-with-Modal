import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService} from '../auth.service';
import { ShowDataService } from './show-data.service';
@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent  implements OnInit {
public items;
public moLarge:any;
public data;
public mobileName;
public Description;
public camera;
public manufacturer;
public operatingSystem;
public storage;
public price;
public rating;
  constructor(private showData:ShowDataService,private authService:AuthService){}

  ngOnInit() {

    this.items = this.showData.getItems();
  console.log(this.items);
  }

info(data){
  console.log(data)
  this.mobileName=data.name;
// this.Description=data.description;
this.moLarge=data.image.large;
this.camera = data.specs.camera;
this.manufacturer = data.specs.manufacturer;
this.operatingSystem= data.specs.os;
this.storage= data.specs.storage;
this.price = data.price;
this.rating=data.rating;
console.log(this.moLarge)
}
  onLogOutPage(){
this.authService.logout();
  }

}
