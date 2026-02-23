import { Component } from '@angular/core';
import { ProjectGridComponent, ProjectItem } from '../components/project-grid.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectGridComponent],
  template: `
  <section class="section">
    <div class="container">
      <div class="kicker">Portfolio</div>
      <h1 class="h1">Projects</h1>
      <p class="p">Filter and browse. Replace sample items with your real projects list.</p>
      <hr class="sep">
      <app-project-grid [projects]="projects"></app-project-grid>
      <div class="card pad" style="margin-top:14px">
        <div class="h2">Add your real portfolio</div>
        <p class="p">Update <code>projects.page.ts</code> with project names, locations, scope, and images.</p>
      </div>
    </div>
  </section>
  `,
  styles:[`.pad{ padding: 18px; } code{ color: var(--brand); }`]
})
export class ProjectsPage {
  projects: ProjectItem[] = [
    { title: 'High-rise Building', category: 'Buildings', location: 'Hyderabad', image: 'assets/brochure/brochure_page_08.png', summary: 'Structural modeling, analysis and design.' },
    { title: 'Commercial Complex', category: 'Buildings', location: 'Hyderabad', image: 'assets/brochure/brochure_page_07.png', summary: 'RCC/steel design with constructability focus.' },
    { title: 'Industrial Warehouse', category: 'Industrial', location: 'India', image: 'assets/brochure/brochure_page_09.png', summary: 'Steel structure optimization and detailing.' },
    { title: 'Bridge Works', category: 'Bridges', location: 'India', image: 'assets/brochure/brochure_page_10.png', summary: 'RCC bridges and culverts.' },
    { title: 'Façade Engineering', category: 'Façade', location: 'India', image: 'assets/brochure/brochure_page_11.png', summary: 'Aluminium/steel façade structural checks.' },
    { title: 'Water Supply Scheme', category: 'Water Projects', location: 'India', image: 'assets/brochure/brochure_page_12.png', summary: 'Hydraulics and distribution network support.' },
    { title: 'Toll Plaza', category: 'Infrastructure', location: 'India', image: 'assets/brochure/brochure_page_13.png', summary: 'RCC/steel support structures.' }
  ];
}
