import { Component } from '@angular/core';
import { ContactFormComponent } from '../components/contact-form.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactFormComponent],
  template: `
  <section class="section">
    <div class="container grid cols-2">
      <div class="card pad">
        <div class="kicker">Contact</div>
        <h1 class="h1">Let’s talk</h1>
        <p class="p">Share your requirements and we’ll get back to you.</p>
        <hr class="sep">
        <div class="info">
          <div class="p"><b>Address:</b> Flat No 301, Prashanti Nilayam, Telecom Nagar, Gachibowli, Hyderabad, Telangana</div>
          <div class="p"><b>Phone:</b> <a class="underline" href="tel:+919700702957">+91 9700702957</a></div>
          <div class="p"><b>Email:</b> <a class="underline" href="mailto:triinearinfratech@gmail.com">triinearinfratech@gmail.com</a></div>
        </div>

        <div class="map card" style="margin-top:14px">
          <iframe
            title="Map"
            width="100%" height="260" style="border:0; border-radius: 18px;"
            loading="lazy" allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Telecom%20Nagar%20Gachibowli%20Hyderabad&output=embed">
          </iframe>
        </div>
      </div>

      <app-contact-form></app-contact-form>
    </div>
  </section>
  `,
  styles:[`
    .pad{ padding: 18px; }
    .info{ display:grid; gap: 10px; }
  `]
})
export class ContactPage {}
