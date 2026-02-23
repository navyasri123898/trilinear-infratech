import { Component } from '@angular/core';
import { ServiceCardsComponent, ServiceCard } from '../components/service-cards.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [ServiceCardsComponent],
  template: `
  <section class="section">
    <div class="container">
      <div class="kicker">Services</div>
      <h1 class="h1">Engineering services</h1>
      <p class="p">Clear service buckets aligned to the brochure. Add more details/deliverables as needed.</p>
      <hr class="sep">

      <h2 class="h2">Core service areas</h2>
      <app-service-cards [services]="services"></app-service-cards>

      <div class="grid cols-2" style="margin-top:14px">
        <div class="card pad">
          <div class="h2">Typical deliverables</div>
          <ul class="list">
            <li class="p">Design reports & calculations</li>
            <li class="p">Construction drawings & detailing</li>
            <li class="p">BOQs / estimation support</li>
            <li class="p">Review comments & compliance notes</li>
          </ul>
        </div>
        <div class="card pad">
          <img class="resp" src="assets/brochure/brochure_page_06.png" alt="Services brochure page">
        </div>
      </div>
    </div>
  </section>
  `,
  styles:[`
    .pad{ padding: 18px; }
    .list{ margin: 10px 0 0; padding-left: 18px; display:grid; gap: 8px; }
  `]
})
export class ServicesPage {
  services: ServiceCard[] = [
    { icon:'🏗️', title: 'Structural Works', bullets: ['Residential villas & commercial buildings', 'RCC & steel structures', 'High-rise buildings', 'Industrial warehouses & factories'] },
    { icon:'🛣️', title: 'Infrastructure', bullets: ['RCC bridges, culverts, FOB', 'Toll plazas', 'WTP / STP structures', 'Railway & road structures'] },
    { icon:'💧', title: 'Water & Environmental', bullets: ['Water supply schemes', 'Hydraulic design review', 'Tender support', 'Estimation & costing'] },
    { icon:'🔍', title: 'Peer Review', bullets: ['Structural design review', 'Hydraulic review', 'Value engineering', 'Due diligence'] },
    { icon:'🧱', title: 'Rehab / Retrofit', bullets: ['Assessment of old structures', 'Retrofit design', 'Strengthening solutions', 'Performance enhancement'] },
    { icon:'🪟', title: 'Façade', bullets: ['Aluminium façade', 'Steel façade', 'Structural checks', 'Detailing support'] },
  ];
}
