import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
  <form class="card pad" [formGroup]="form" (ngSubmit)="submit()">
    <div class="grid cols-2">
      <label class="field">
        <span>Name</span>
        <input formControlName="name" placeholder="Your name">
      </label>

      <label class="field">
        <span>Phone</span>
        <input formControlName="phone" placeholder="+1 / +91">
      </label>

      <label class="field">
        <span>Email</span>
        <input formControlName="email" placeholder="you@email.com">
      </label>

      <label class="field">
        <span>Service</span>
        <select formControlName="service">
          <option value="Structural Works">Structural Works</option>
          <option value="Water & Environmental Works">Water & Environmental Works</option>
          <option value="Peer Review & Due Diligence">Peer Review & Due Diligence</option>
          <option value="Other">Other</option>
        </select>
      </label>
    </div>

    <label class="field" style="margin-top:12px">
      <span>Message</span>
      <textarea rows="5" formControlName="message" placeholder="Tell us about your project..."></textarea>
    </label>

    <div class="row">
      <button class="btn primary" type="submit" [disabled]="form.invalid">Send Enquiry</button>
      <span class="p" *ngIf="status">{{status}}</span>
    </div>

    <p class="p" style="margin-top:10px">
      Note: This starter project does not send emails by default. Connect Formspree/Netlify Forms
      or your backend API.
    </p>
  </form>
  `,
  styles: [`
    .pad{ padding: 16px; }
    .row{ display:flex; gap: 12px; align-items:center; margin-top: 14px; flex-wrap:wrap; }
    .field{ display:grid; gap: 8px; }
    .field span{ color: var(--muted); font-size: 12px; letter-spacing: .02em; }
    input, select, textarea{
      width: 100%;
      padding: 10px 12px;
      border-radius: 12px;
      border: 1px solid var(--border);
      background: rgba(255,255,255,.05);
      color: var(--text);
      outline: none;
    }
  `]
})
export class ContactFormComponent {
  status = '';
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: [''],
    email: ['', [Validators.required, Validators.email]],
    service: ['Structural Works', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private fb: FormBuilder) {}

  submit(){
    if(this.form.invalid) return;
    // Replace with your email service / API call.
    this.status = 'Thanks! Your message is ready to be sent (connect an email handler).';
    // For demo: log payload
    console.log('Enquiry:', this.form.value);
    this.form.reset({ service: 'Structural Works' });
  }
}
