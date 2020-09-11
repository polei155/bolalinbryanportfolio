import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  timelineDates = [
    {
      date: '2019 - Present',
      isSelected: false
    },
    {
      date: '2018 – June 2019',
      isSelected: false
    },
    {
      date: '2017 – December 2018',
      isSelected: false
    }]
  bgSelectedIndex = 0;
  isFirst = false;
  selectedItems = {};
  constructor() { }

  ngOnInit() {
    this.autorun();
  }
  autorun() {
    this.initialisers()
    this.listeners()
  }
  initialisers() {
    this.initBackground(this.bgSelectedIndex);
  }
  listeners() {

  }

  initBackground(sliderNum: any) {
    let timelineSlider = Array.from(document.getElementsByClassName('timeline-slider') as HTMLCollectionOf<HTMLElement>);
    this.bgSelectedIndex = sliderNum;
    if (this.bgSelectedIndex == 0) {
      timelineSlider[0].style.backgroundImage = "url('/assets/images/work-exp/sliderbg1.jpg'), linear-gradient(to left, rgba(0,0,0,0.5) , transparent)"
    }
    if (this.bgSelectedIndex === 1) {
      timelineSlider[0].style.backgroundImage = "url('/assets/images/work-exp/sliderbg2.jpg'), linear-gradient(to left, rgba(0,0,0,0.5) , transparent)"
    }
    if (this.bgSelectedIndex === 2) {
      timelineSlider[0].style.backgroundImage = "url('/assets/images/work-exp/sliderbg3.jpg'), linear-gradient(to left, rgba(0,0,0,0.5) , transparent)"
    }
  }
  selectTimeline(e) {
    this.initBackground(e);
    this.isFirst = true;
    this.bgSelectedIndex = e;
  }

  isSelectedItem(item, id) {
    return this.bgSelectedIndex === item;
  }
}
