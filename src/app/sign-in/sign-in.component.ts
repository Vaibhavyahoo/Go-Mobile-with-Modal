import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { AuthService} from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { Router, ActivatedRoute } from '@angular/router';
//
// import { AlertService, AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user: FormGroup;
  public token;
  returnUrl: string;
  constructor(private authService: AuthService, private router: Router,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.authService.ifLoggedIn();

    this.user = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      password: new FormControl('', Validators.required)

    });

  }
  onSubmit() {
    // console.log("hiii")
    this.authService.signinUser(this.user.value).then((res) => {
      console.log(this.user.value);
      console.log(res)
      this.token = res;
      console.log("uid:", this.token.uid)
      localStorage.setItem('currentUser', this.token.uid)
      alert("you have successfully loggged in")
      this.router.navigate(['/Myapp'])
    });

  }
}
