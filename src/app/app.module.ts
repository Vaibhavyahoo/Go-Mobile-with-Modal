import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthService} from './auth.service';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import {	routing	}	from	'./app.routes';
import { AngularFireModule } from 'angularfire2';
import {PeopleService} from './loadingService';
import { firebaseConfig } from './../environments/firebase.config';
import { ShowDataComponent } from './show-data/show-data.component';
import { LoginRequireResolver } from './resolver/login-require.service'
import { ShowDataService } from './show-data/show-data.service';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    ShowDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  providers: [AuthService, PeopleService,LoginRequireResolver,ShowDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
