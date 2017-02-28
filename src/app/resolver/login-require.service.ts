
import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class LoginRequireResolver implements Resolve<any>{

  constructor(private authService : AuthService) { }

  resolve(route: ActivatedRouteSnapshot): Promise<any> {
      return this.authService.loginRequired();
  }
}
