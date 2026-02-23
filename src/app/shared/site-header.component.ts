import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
  <header class="header">
    <div class="container row">
      <a class="brand" routerLink="/">
        <div class="logo">TI</div>
        <div>
          <div class="name">Trilinear Infratech</div>
          <div class="tag">Engineering Consultancy</div>
        </div>
      </a>

      <nav class="nav">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
        <a routerLink="/services" routerLinkActive="active">Services</a>
        <a routerLink="/projects" routerLinkActive="active">Projects</a>
        <a routerLink="/approach" routerLinkActive="active">Approach</a>
        <a routerLink="/clients" routerLinkActive="active">Clients</a>
        <a routerLink="/contact" routerLinkActive="active">Contact</a>
      </nav>

      <div class="cta">
        <a class="btn primary" routerLink="/contact">Get a Quote</a>
      </div>
    </div>
  </header>
  `,
  styles: [`
    .header{
      position: sticky; top: 0; z-index: 50;
      backdrop-filter: blur(12px);
      background: rgba(11,16,32,.65);
      border-bottom: 1px solid var(--border);
    }
    .row{ display:flex; align-items:center; justify-content:space-between; gap: 14px; padding: 12px var(--pad); }
    .brand{ display:flex; align-items:center; gap: 12px; }
    .logo{
      width: 40px; height: 40px; border-radius: 12px;
      display:grid; place-items:center;
      background: rgba(94,168,255,.18);
      border: 1px solid rgba(94,168,255,.35);
      font-weight: 800;
    }
    .name{ font-weight: 750; }
    .tag{ font-size: 12px; color: var(--muted); margin-top: 2px; }
    .nav{ display:flex; gap: 14px; flex-wrap: wrap; justify-content:center; }
    .nav a{ color: var(--muted); padding: 8px 10px; border-radius: 999px; }
    .nav a.active, .nav a:hover{ color: var(--text); background: rgba(255,255,255,.06); }
    .cta{ display:flex; gap:10px; }
    @media (max-width: 960px){
      .row{ flex-direction: column; align-items: stretch; }
      .cta{ justify-content: center; }
      .nav{ justify-content: center; }
    }
  `]
})
export class SiteHeaderComponent {}
