import { Component } from '@angular/core';

@Component({
  selector: 'app-approach-page',
  standalone: true,
  template: `
  <section class="section">
    <div class="container grid cols-2">
      <div class="card pad">
        <div class="kicker">Approach</div>
        <h1 class="h1">How we work</h1>
        <p class="p">
          A simple, repeatable approach helps ensure correctness, clarity, and execution-ready designs.
        </p>
        <hr class="sep">
        <ol class="steps">
          <li><b>Understand</b> – clarify problem, scope, constraints</li>
          <li><b>Frame</b> – define assumptions, load cases, acceptance criteria</li>
          <li><b>Analyze</b> – rigorous analysis (including FEA where needed)</li>
          <li><b>Design</b> – safe & economic design, code compliance</li>
          <li><b>Optimize</b> – refine for constructability and cost</li>
        </ol>
      </div>
      <div class="card pad">
        <img class="resp" src="assets/brochure/brochure_page_05.png" alt="Approach brochure page">
      </div>
    </div>
  </section>
  `,
  styles:[`
    .pad{ padding: 18px; }
    .steps{ margin: 0; padding-left: 18px; display:grid; gap: 10px; color: var(--muted); line-height: 1.6; }
    .steps b{ color: var(--text); }
  `]
})
export class ApproachPage {}
