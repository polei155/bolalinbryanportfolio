import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
  bgSelectedIndex: any;
  isDesktop = false;
  isMenuOpen: boolean = false;
  navs = ['About', 'Qualifications', 'Work Experience', 'Tech Stack']
  listNav = [
    {
      name: 'about',
      link: '#'
    },
    {
      name: 'qualification',
      link: '#qualification'
    },
    {
      name: 'work experience',
      link: '#experience'
    },
    {
      name: 'tech stack',
      link: '#tech-stack'
    },
  ]
  constructor() { }

  ngOnInit() {
    this.autorun();
  }

  autorun() {
    this.initialisers();
    this.listeners();
  }
  initialisers() {
    this.initDeviceWidth();
  }
  listeners() {

  }

  initDeviceWidth() {
    if (window.innerWidth > 768) {
      this.isDesktop = true;
    } else {
      this.isDesktop = false;
    }
  }

  hamburgerClick() {
    if (this.isMenuOpen = true) {
      this.isMenuOpen = true;
    } else {
      this.isMenuOpen = false;
    }
  }

  selectNavDesk(linkName, e) {
    this.bgSelectedIndex = e;
    let scroll: any;
    let selectedSectionQualifications = Array.from(document.getElementsByClassName('qualifications') as HTMLCollectionOf<HTMLElement>);
    let selectedSectionExperience = Array.from(document.getElementsByClassName('experience') as HTMLCollectionOf<HTMLElement>);
    let selectedSectionAbout = Array.from(document.getElementsByClassName('about-desc') as HTMLCollectionOf<HTMLElement>);
    let selectedSectionTechStack = Array.from(document.getElementsByClassName('tech-stack') as HTMLCollectionOf<HTMLElement>);

    if (linkName === '#qualification') {
      scroll = selectedSectionQualifications[0].offsetTop;
    } else if (linkName == '#experience') {
      scroll = selectedSectionExperience[0].offsetTop
    } else if (linkName == '#') {
      scroll = selectedSectionAbout[0].offsetTop
    } else if (linkName == '#tech-stack') {
      scroll = selectedSectionTechStack[0].offsetTop
    }

    window.scrollBy(0, scroll)
    if (e >= 0) {
      setTimeout(() => {
        this.isMenuOpen = false;
      }, 500);
    }
  }
  isSelectedItem(item) {
    return this.bgSelectedIndex === item;
  }

}
