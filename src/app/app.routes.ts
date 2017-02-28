import {	RouterModule, Routes	}	from	'@angular/router';
// import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { LoginRequireResolver } from './resolver/login-require.service';
import { AuthService} from './auth.service';
const routes: Routes = [
  { path: '', redirectTo: 'SignIn', pathMatch: 'full' },
		{ path: 'SignIn', component: SignInComponent },
		{ path: 'SignUp', component: SignUpComponent },
  // { path: 'Myapp', component: ShowDataComponent,canActivate:[AuthService] },
  { path : 'Myapp' , component : ShowDataComponent ,
       resolve : { loginRequire : LoginRequireResolver }}

        //  { path : 'product' , component : BuyProductComponent, resolve : { loginRequire : LoginRequireResolver } }

];
export const routing = RouterModule.forRoot(routes);
