import { Component } from '@angular/core';
import { ClientLogosComponent } from '../components/client-logos.component';

@Component({
  selector: 'app-clients-page',
  standalone: true,
  imports: [ClientLogosComponent],
  template: `
  <section class="section">
    <div class="container grid cols-2">
      <div class="card pad">
        <div class="kicker">Clients</div>
        <h1 class="h1">Trusted by teams</h1>
        <p class="p">
          Replace the sample names with your exact client list (and logos if available).
        </p>
        <hr class="sep">
        <app-client-logos [clients]="clients"></app-client-logos>
      </div>
      <div class="card pad">
        <img class="resp" src="assets/brochure/brochure_page_16.png" alt="Clients brochure page">
      </div>
    </div>
  </section>
  `,
  styles:[`.pad{ padding: 18px; }`]
})
export class ClientsPage {
  clients: string[] = [
    'L&T', 'Aparna Constructions', 'My Home', 'NCC', 'IRCON', 'GHMC',
    'Client 7', 'Client 8', 'Client 9'
  ];
}
