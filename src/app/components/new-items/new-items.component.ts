import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-2";
import {Musician, musicians, Song} from "../../prefilled";

@Component({
  selector: 'app-new-items',
  templateUrl: './new-items.component.html',
  styleUrls: ['./new-items.component.css']
})
export class NewItemsComponent implements OnInit {
  soundOn = true;
  paused = false;
  audio = new Audio()
  playing: string = ''
  famousCollection: Musician[] = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<span class="material-icons">arrow_right_alt</span>', '<i class="fa-chevron-right></i>"'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      }
    },
    nav: true,
  };

  constructor() {
  }

  ngOnInit(): void {
    this.famousCollection = musicians
  }

  playAudio(song?: Song) {
    if (song) {
      this.playing = song.name
      this.audio.pause();
      this.audio.src = '';
      this.audio.currentTime = 0;
      this.audio = new Audio();
      this.audio.src = song.trackUri;
    } else {
      this.audio.pause();
      this.audio.currentTime = 0;
    }

    if (this.soundOn) {
      console.log('playing', this.audio.src)
      this.audio.load();
      this.audio.play();
    }


  }

  changePlay(song?: Song) {
    this.paused = !this.paused
    if (!this.soundOn) return;

    if (this.playing === song?.name) {
      if (this.paused) {
        this.playing = song?.name;
        this.audio.load();
        this.audio.play();
      } else {
        this.playing = '';
        this.audio.pause();
        this.audio.currentTime = 0;
      }
    } else if (this.playing !== song?.name) {
      this.playing = song?.name || ''
      this.audio.pause();
      this.audio.src = '';
      this.audio.currentTime = 0;
      this.audio = new Audio();
      this.audio.src = song?.trackUri || '';
      this.audio.currentTime = 0;
      this.audio.load();
      this.audio.play();
    }

  }

  checkIfPlaying(name: string) {
    if (this.playing === name) {
      return true;
    } else {
      return false;
    }
  }
}
