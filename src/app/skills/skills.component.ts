import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  @ViewChild('skillSection', { static: true }) skillSection!: ElementRef;

  skills = [
    { name: 'Python', icon: '../../assets/images/python.png' },
    { name: 'Django', icon: '../../assets/images/django.png' },
    { name: 'Pandas', icon: '../../assets/images/pandas.png' },
    { name: 'Angular', icon: '../../assets/images/angular.jpg' },
    { name: 'Bootstrap', icon: '../../assets/images/bootstrap.jfif' },
    { name: 'MySQL', icon: '../../assets/images/mysql.png' },
    { name: 'PostgreSQL', icon: '../../assets/images/postgresql.webp' },
    // { name: 'SQL', icon: '../../assets/icons/sql.png' },
    { name: 'Git', icon: '../../assets/images/git.png' },
    // { name: 'Scrapy', icon: '../../assets/icons/scrapy.png' }
  ];

  constructor() {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.skillSection.nativeElement.classList.add('slide-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this.skillSection.nativeElement);
  }
}
