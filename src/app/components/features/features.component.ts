import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  features = [
    { title: 'Viral AI Videos', desc: 'Browse trending AI-generated status videos curated for quick entertainment.', icon: '🎬' },
    { title: 'Video Player UI', desc: 'Watch through an immersive player designed to feel like a premium viewing session.', icon: '▶️' },
    { title: 'Coin Unlocks', desc: 'Use coins to watch selected premium videos — simple and transparent.', icon: '🪙' },
    { title: 'Secure Payments', desc: 'Buy coin packs through our trusted payment gateway anytime.', icon: '💳' },
  ];
}
