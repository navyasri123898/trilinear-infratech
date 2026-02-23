import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
  <footer class="footer">
    <div class="container grid cols-3">
      <div class="card pad">
        <div class="h2">Trilinear Infratech</div>
        <p class="p">Engineering consultancy for structural, water & environmental works, and peer review.</p>
        <div class="small">© {{year}} Trilinear Infratech</div>
      </div>

      <div class="card pad">
        <div class="h2">Quick Links</div>
        <div class="links">
          <a routerLink="/services">Services</a>
          <a routerLink="/projects">Projects</a>
          <a routerLink="/approach">Approach</a>
          <a routerLink="/clients">Clients</a>
          <a routerLink="/contact">Contact</a>
        </div>
      </div>

      <div class="card pad">
        <div class="h2">Contact</div>
        <div class="p line">📍 Gachibowli, Hyderabad</div>
        <a class="p line underline" href="tel:+919700702957">📞 +91 9700702957</a>
        <a class="p line underline" href="mailto:triinearinfratech@gmail.com">✉️ triinearinfratech@gmail.com</a>
      </div>
    </div>
  </footer>
  `,
  styles: [`
    .footer{ padding: 34px 0 46px; border-top: 1px solid var(--border); background: rgba(0,0,0,.12); }
    .pad{ padding: 16px; }
    .small{ margin-top: 12px; color: var(--muted); font-size: 12px; }
    .links{ display:grid; gap: 10px; margin-top: 10px; }
    .links a{ color: var(--muted); }
    .links a:hover{ color: var(--text); }
    .line{ margin-top: 8px; display:block; }
  `]
})
export class SiteFooterComponent {
  year = new Date().getFullYear();
}
