import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SITE } from '../../core/site.constants';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss'
})
export class ContactCardComponent {
  site = SITE;

  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;

  get phoneLink(): string {
    return 'tel:' + SITE.phone.replaceAll(' ', '');
  }

  onSubmit(): void {
    this.submitted = true;
  }
}
