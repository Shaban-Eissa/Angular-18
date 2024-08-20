import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CopyrightDirective } from './copyright.directive';
import { APP_SETTINGS, AppSettings } from './app.settings';
import { AuthComponent } from './auth/auth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CopyrightDirective,
    AuthComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'World';

  constructor(@Inject(APP_SETTINGS) public settings: AppSettings) {}
}
