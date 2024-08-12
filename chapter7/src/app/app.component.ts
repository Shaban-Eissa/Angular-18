import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { PermissionDirective } from './permission.directive';
import { ProductsModule } from './products/products.module';
import { APP_SETTINGS, AppSettings, appSettings } from './app.settings';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductListComponent,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective,
    ProductsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{ provide: APP_SETTINGS, useValue: appSettings }],
})
export class AppComponent {
  title = 'chapter3';
  title$ = new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });

  private setTitle = () => {
    const timeStamp = new Date();
    this.title = `${this.settings.title} - ${timeStamp}`;
  };
  constructor(@Inject(APP_SETTINGS) public settings: AppSettings) {
    // this.changeTitle(this.setTitle);
    // this.onComplete().then(this.setTitle);
    this.title$.subscribe(this.setTitle);
  }

  private changeTitle = (callback: Function) => {
    setInterval(() => {
      callback();
    }, 2000);
  };

  private onComplete = () => {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve('completed');
      }, 2000);
    });
  };
}
