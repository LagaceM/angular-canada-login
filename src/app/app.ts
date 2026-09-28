import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly oidcSecurityService = inject(OidcSecurityService);

  protected handleSignInClick() {
    this.oidcSecurityService.authorize();
  }
}
