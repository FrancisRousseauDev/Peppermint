import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-2";
import {Musician, musicians} from "../../prefilled";
@Component({
  selector: 'app-hot-collections',
  templateUrl: './hot-collections.component.html',
  styleUrls: ['./hot-collections.component.css']
})
export class HotCollectionsComponent implements OnInit {
  famousCollection: Musician[] = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      }
    },
    nav: true,
  };
  constructor() { }

  ngOnInit(): void {
    console.log(musicians)
    this.famousCollection = musicians
  }

}
