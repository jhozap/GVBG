import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slides = [
    {
      src: 'assets/img/1.png',
      alt: 'Slide 1'
    },
    {
      src: 'assets/img/2.png',
      alt: 'Slide 2'
    },
    {
      src: 'assets/img/3.png',
      alt: 'Slide 3'
    },
    {
      src: 'assets/img/4.png',
      alt: 'Slide 4'
    },
    {
      src: 'assets/img/5.png',
      alt: 'Slide 5'
    }
  ];

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: true
  };

  constructor() { }

  ngOnInit() {
  }

  

}
