import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  features = [
    { title: 'Voice Calls', desc: 'Instant voice connections with hosts for pure entertainment.', icon: '🎙️' },
    { title: 'Live Hosts', desc: 'Browse available hosts and start a call in seconds.', icon: '🌟' },
    { title: 'Safe & Private', desc: 'Entertainment-focused platform with community guidelines.', icon: '🔒' },
    { title: 'Easy Wallet', desc: 'Simple credits system — recharge and call anytime.', icon: '💳' },
  ];
}
