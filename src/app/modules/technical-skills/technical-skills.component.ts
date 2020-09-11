import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.scss']
})
export class TechnicalSkillsComponent implements OnInit {
  scrollCurrPosition: any;
  constructor() { }

  ngOnInit() {
    this.autorun();
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll(event): void {
    this.scrollCurrPosition = event.path[1].scrollY;
    let backToTopEl = Array.from(document.getElementsByClassName('back-to-top') as HTMLCollectionOf<HTMLElement>);

    if (this.scrollCurrPosition > 1400) {
      backToTopEl[0].style.visibility = 'visible';
    } else {
      backToTopEl[0].style.visibility = 'hidden';
    }
  };

  autorun() {
    this.initialisers();
  }

  initialisers() {
  }
  backtoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
