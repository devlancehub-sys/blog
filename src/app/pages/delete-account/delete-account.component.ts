import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SITE } from '../../core/site.constants';

@Component({
  selector: 'app-delete-account',
  standalone: true,
  imports: [RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './delete-account.component.html',
  styleUrl: './delete-account.component.scss'
})
export class DeleteAccountComponent {
  site = SITE;
  deleteMailto = `mailto:${SITE.supportEmail}?subject=${encodeURIComponent('Account Deletion Request — TalkyMate')}&body=${encodeURIComponent(
    'Please delete my TalkyMate account.\n\nRegistered name:\nRegistered phone / username:\nApp used (Viewer / Creator):\nReason (optional):\n\nI understand that account deletion is permanent.'
  )}`;
}
