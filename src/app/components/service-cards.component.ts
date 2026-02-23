import { Component, Input } from '@angular/core';

export type ServiceCard = { title: string; bullets: string[]; icon: string; };

@Component({
  selector: 'app-service-cards',
  standalone: true,
  template: `
  <div class="grid cols-3">
    @for (s of services; track s.title) {
      <div class="card pad">
        <div class="head">
          <div class="ic">{{s.icon}}</div>
          <div class="h2">{{s.title}}</div>
        </div>
        <ul class="list">
          @for (b of s.bullets; track b) { <li class="p">{{b}}</li> }
        </ul>
      </div>
    }
  </div>
  `,
  styles: [`
    .pad{ padding: 16px; }
    .head{ display:flex; align-items:center; gap: 10px; margin-bottom: 10px; }
    .ic{
      width: 36px; height: 36px; border-radius: 12px;
      display:grid; place-items:center;
      background: rgba(94,168,255,.18);
      border: 1px solid rgba(94,168,255,.35);
    }
    .list{ margin: 0; padding-left: 18px; display:grid; gap: 8px; }
  `]
})
export class ServiceCardsComponent {
  @Input({ required: true }) services: ServiceCard[] = [];
}
