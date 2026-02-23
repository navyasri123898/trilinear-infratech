import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceCardsComponent, ServiceCard } from '../components/service-cards.component';
import { ProjectGridComponent, ProjectItem } from '../components/project-grid.component';
import { ClientLogosComponent } from '../components/client-logos.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, ServiceCardsComponent, ProjectGridComponent, ClientLogosComponent],
  template: `
  <section class="section hero">
    <div class="container grid cols-2">
      <div class="card pad">
        <div class="kicker">Power of Forecasting the Uncertain</div>
        <h1 class="h1">Engineering solutions that are safe, economic, and buildable.</h1>
        <p class="p">
          Trilinear Infratech provides structural engineering, water & environmental engineering,
          and peer review services for buildings and infrastructure.
        </p>

        <div class="actions">
          <a class="btn primary" routerLink="/contact">Request Consultation</a>
          <a class="btn" routerLink="/services">Explore Services</a>
          <a class="btn" href="assets/brochure/Trilinear_Infratech_Brochure.pdf" download>Download Brochure</a>
        </div>
      </div>

      <div class="card pad">
        <img class="resp" src="assets/brochure/brochure_page_01.png" alt="Brochure cover">
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="kicker">Services</div>
      <h2 class="h2">What we do</h2>
      <app-service-cards [services]="services"></app-service-cards>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="kicker">Featured work</div>
      <h2 class="h2">Projects snapshot</h2>
      <app-project-grid [projects]="projects"></app-project-grid>
      <div style="margin-top:14px">
        <a class="btn" routerLink="/projects">View all projects</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="kicker">Clients</div>
      <h2 class="h2">Trusted by</h2>
      <app-client-logos [clients]="clients"></app-client-logos>
    </div>
  </section>
  `,
  styles: [`
    .pad{ padding: 18px; }
    .hero{ padding-top: 22px; }
    .actions{ margin-top: 14px; display:flex; flex-wrap:wrap; gap: 10px; }
  `]
})
export class HomePage {
  services: ServiceCard[] = [
    { icon:'🏗️', title: 'Structural Works', bullets: ['Buildings (RCC/Steel, High-rise)', 'Industrial structures', 'Bridges & infrastructure', 'Façade design'] },
    { icon:'💧', title: 'Water & Environmental', bullets: ['Water supply schemes', 'Hydraulics & networks', 'Tender support', 'Estimation & costing'] },
    { icon:'🔍', title: 'Peer Review', bullets: ['Design & drawing review', 'Value engineering', 'Rehab/retrofit designs', 'Performance enhancement'] },
  ];

  projects: ProjectItem[] = [
    { title: 'High-rise / Towers', category: 'Buildings', location: 'Hyderabad', image: 'assets/brochure/brochure_page_08.png', summary: 'Structural analysis & design for high-rise and commercial buildings.' },
    { title: 'Bridge / Approach Works', category: 'Bridges', location: 'India', image: 'assets/brochure/brochure_page_10.png', summary: 'RCC bridges, culverts, and approach structures.' },
    { title: 'Water Supply Network', category: 'Water Projects', location: 'India', image: 'assets/brochure/brochure_page_12.png', summary: 'Water supply schemes including intake, pumping, and distribution.' },
    { title: 'Industrial Warehouse', category: 'Industrial', location: 'India', image: 'assets/brochure/brochure_page_09.png', summary: 'Steel/RCC industrial structures and warehouses.' },
    { title: 'Façade Engineering', category: 'Façade', location: 'India', image: 'assets/brochure/brochure_page_11.png', summary: 'Aluminium and steel façade structural design.' },
    { title: 'Toll Plaza Structures', category: 'Infrastructure', location: 'India', image: 'assets/brochure/brochure_page_13.png', summary: 'Toll plaza and auxiliary RCC/steel structures.' }
  ];

  clients: string[] = [
    'L&T', 'Aparna Constructions', 'My Home', 'NCC', 'IRCON', 'GHMC'
  ];
}
