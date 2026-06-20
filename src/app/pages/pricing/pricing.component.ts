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
    { name: 'Basic', price: 49, credits: 49, description: 'Quick recharge to start voice call entertainment.' },
    { name: 'Standard', price: 99, credits: 99, description: 'Best value for regular TalkyMate voice calls.', popular: true },
  ];

  services = [
    { title: 'Voice Call Entertainment', desc: 'Connect with hosts for fun, friendly voice conversations. Billed per minute from your wallet credits.' },
    { title: 'Wallet Recharge', desc: 'Add credits to your TalkyMate wallet via secure online payment (Cashfree).' },
    { title: 'Call History', desc: 'View past calls and reconnect with hosts you enjoyed.' },
  ];
}
