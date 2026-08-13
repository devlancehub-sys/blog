import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

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
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent {
  plans: PricingPlan[] = [
    { name: 'Starter', price: 49, credits: 49, description: 'A quick coin top-up to unlock premium videos.' },
    { name: 'Popular', price: 99, credits: 99, description: 'Best value for regular TalkyMate viewers.', popular: true },
    { name: 'Premium', price: 299, credits: 312, description: 'More coins plus bonus value for frequent watchers.' },
    { name: 'Mega', price: 599, credits: 636, description: 'Large coin pack with bonus coins included.' },
  ];

  services = [
    { title: 'Coin Packs', desc: 'Purchase coins securely and use them to unlock premium AI status videos.' },
    { title: 'Premium Video Access', desc: 'Spend coins only on selected premium content — free videos remain available to browse.' },
    { title: 'Watch History', desc: 'Revisit videos you have already watched inside the app.' },
  ];
}
