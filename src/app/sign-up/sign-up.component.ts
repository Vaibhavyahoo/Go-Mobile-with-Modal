import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { AuthService} from '../auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  myForm: FormGroup;
  genders =
  [
    'male',
    'female'
  ]
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      'password': new FormControl('', Validators.required),
      'gender': new FormControl('')
    });
  }
  onSignup() {
    this.authService.signUpUser(this.myForm.value);
    console.log(this.myForm);
    alert("you are successfully created account.please sign in");
  }
  // constructor() { }

}
