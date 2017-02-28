import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  email: string;
  password: string;
}
declare var firebase: any;
@Injectable()
export class AuthService {

  constructor(private router:Router) { }
  signUpUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
      console.log(error);
    });
  }

  signinUser(user: User) {
    return new Promise((resolve,reject) => {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(userData => resolve(userData),

    err => reject(err),
  // alert("there is no user record corresponding to this identifier. The user may have been deleted. ")
      );
  });
}




canActivate() {
  console.log("local",localStorage.getItem('currentUser'))
       if (localStorage.getItem('currentUser')) {
           // logged in so return true
           return true;
         }
       else
         return false;

       }

       ifLoggedIn(){
         if(this.canActivate())
         this.router.navigate(['/Myapp']);
         else
         this.router.navigate(['/SignIn']);
       }


       loginRequired(): Promise<any>{
    if(this.canActivate()) {
      return Promise.resolve();
    }
    else {
      this.router.navigate(['/SignIn']);
    }
  }



logout(){
  firebase.auth().signOut();
  localStorage.clear();
  this.router.navigate(['/SignIn']);
  localStorage.removeItem("currentUser");
  this.router.navigate(['']);
return false;
}


}
