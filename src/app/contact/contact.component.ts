import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactLinks = [
    { label: 'LinkedIn', icon: '../../assets/images/linkedin.webp', url: 'https://www.linkedin.com/in/mahima-chaudhary-143826246/' },
    { label: 'GitHub', icon: '../../assets/images/github.png', url: 'https://github.com/Mahima0123' },
    { label: 'Email', icon: '../../assets/images/gmail.jpg', url: 'mailto:chaudharymahima983@gmail.com' }
  ];
}
