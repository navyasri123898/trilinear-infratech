import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  template: `
  <section class="section">
    <div class="container grid cols-2">
      <div class="card pad">
        <div class="kicker">About</div>
        <h1 class="h1">Who we are</h1>
        <p class="p">
          Trilinear Infratech is an engineering consultancy focused on delivering safe, economic,
          and execution-friendly solutions across structural and water infrastructure domains.
        </p>
        <hr class="sep">
        <div class="h2">Vision</div>
        <p class="p">Deliver high-quality engineering solutions with reliability and transparency.</p>
        <div class="h2" style="margin-top:12px">Mission</div>
        <p class="p">Help customers solve complex engineering problems through rigorous analysis and collaboration.</p>
      </div>
      <div class="card pad">
        <img class="resp" src="assets/brochure/brochure_page_02.png" alt="About brochure page">
      </div>
    </div>
  </section>
  `,
  styles:[`.pad{ padding: 18px; }`]
})
export class AboutPage {}
