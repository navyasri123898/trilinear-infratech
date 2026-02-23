import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from './shared/site-header.component';
import { SiteFooterComponent } from './shared/site-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
  template: `
    <app-site-header></app-site-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-site-footer></app-site-footer>
  `,
  styles: [`
    main{ min-height: calc(100vh - 120px); }
  `]
})
export class AppComponent {}
