import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SITE } from '../../core/site.constants';

interface PricingPlan {
  name: string;
  price: number;
  credits: number;
  description: string;
  popular?: boolean;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  site = SITE;

  plans: PricingPlan[] = [
    { name: 'Basic', price: 36, credits: 36, description: 'Quick recharge to start voice call entertainment.' },
    { name: 'Standard', price: 72, credits: 72, description: 'Best value for regular TalkyMate voice calls.',},
    { name: 'Premium', price: 180, credits: 192, description: 'Premium plan for frequent TalkyMate users.', popular: true},
    { name: 'Ultimate', price: 360, credits: 384, description: 'Ultimate plan for heavy TalkyMate users.' },
    { name: 'Diamond', price: 720, credits: 768, description: 'Diamond plan for heavy TalkyMate users.' },
  ];

  services = [
    { title: 'Voice Call Entertainment', desc: 'Connect with hosts for fun, friendly voice conversations. Billed per minute from your wallet credits.' },
    { title: 'Wallet Recharge', desc: 'Add credits to your TalkyMate wallet via secure online payment' },
    { title: 'Call History', desc: 'View past calls and reconnect with hosts you enjoyed.' },
    { title: 'Host Profiles', desc: 'Browse and connect with friendly, engaging hosts for voice conversations.' },
  ];
}
