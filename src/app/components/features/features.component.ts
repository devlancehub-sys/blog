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
    { title: 'Chatting', desc: 'Real-time text chat with your connections.', icon: '💬' },
    { title: 'Messaging', desc: 'Send messages and stay in touch anytime.', icon: '✉️' },
    { title: 'Audio Call', desc: 'Clear voice calls for a personal touch.', icon: '🎧' },
    { title: 'Video Call', desc: 'Face-to-face video for real connection.', icon: '📹' },
  ];
}
