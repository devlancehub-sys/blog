import { Component } from '@angular/core';
import { SITE } from '../../core/site.constants';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss'
})
export class ContactCardComponent {
  site = SITE;
}
