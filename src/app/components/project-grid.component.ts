import { Component, Input, signal, computed } from '@angular/core';

export type ProjectItem = {
  title: string;
  category: string;
  location?: string;
  image?: string;
  summary?: string;
};

@Component({
  selector: 'app-project-grid',
  standalone: true,
  template: `
  <div class="filters">
    @for (c of categories(); track c) {
      <button class="btn" [class.primary]="c===active()" (click)="active.set(c)">{{c}}</button>
    }
  </div>

  <div class="grid cols-3">
    @for (p of filtered(); track p.title) {
      <div class="card pad">
        <img class="resp" [src]="p.image || fallback" [alt]="p.title">
        <div class="h2" style="margin-top:12px">{{p.title}}</div>
        <div class="p">{{p.location || ''}}</div>
        <hr class="sep">
        <p class="p">{{p.summary || 'Project details coming soon.'}}</p>
        <div class="pill">{{p.category}}</div>
      </div>
    }
  </div>
  `,
  styles: [`
    .pad{ padding: 16px; }
    .filters{ display:flex; flex-wrap:wrap; gap: 10px; margin-bottom: 14px; }
    .pill{
      display:inline-block; margin-top: 10px;
      padding: 6px 10px; border-radius: 999px;
      border: 1px solid var(--border);
      background: rgba(255,255,255,.06);
      color: var(--muted);
      font-size: 12px;
    }
  `]
})
export class ProjectGridComponent {
  @Input({ required: true }) projects: ProjectItem[] = [];
  @Input() fallback = 'assets/brochure/brochure_page_08.png';

  active = signal<string>('All');

  categories = computed(() => {
    const set = new Set<string>(['All']);
    for (const p of this.projects) set.add(p.category);
    return Array.from(set);
  });

  filtered = computed(() => {
    const a = this.active();
    return a === 'All' ? this.projects : this.projects.filter(p => p.category === a);
  });
}
