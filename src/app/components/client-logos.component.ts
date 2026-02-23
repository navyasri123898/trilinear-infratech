import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-client-logos',
  standalone: true,
  template: `
  <div class="grid cols-3">
    @for (c of clients; track c) {
      <div class="card pad">
        <div class="logo">{{c}}</div>
      </div>
    }
  </div>
  `,
  styles: [`
    .pad{ padding: 18px; display:grid; place-items:center; min-height: 90px; }
    .logo{ color: var(--muted); font-weight: 650; letter-spacing: .02em; text-align:center; }
  `]
})
export class ClientLogosComponent {
  @Input({ required: true }) clients: string[] = [];
}
