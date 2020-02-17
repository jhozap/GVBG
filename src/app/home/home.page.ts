import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  [x: string]: any;
  searchVisible = false;
  slides = [
    {
      src: "assets/img/1.png",
      alt: "Slide 1"
    },
    {
      src: "assets/img/2.png",
      alt: "Slide 2"
    },
    {
      src: "assets/img/3.png",
      alt: "Slide 3"
    },
    {
      src: "assets/img/4.png",
      alt: "Slide 4"
    },
    {
      src: "assets/img/5.png",
      alt: "Slide 5"
    }
  ];

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: true
  };

  constructor() {}

  ngOnInit() {}

  searchText(e) {
    console.log(e);
    console.log(e.detail.value);
  }
  
}
