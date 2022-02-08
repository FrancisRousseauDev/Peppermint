import {Component, OnInit} from '@angular/core';
import {Musician, musicians, Song} from "../../prefilled";
import {ToolbarService} from "../../services/toolbar.service";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  famousCollection: Musician[] = [];
  soundOn = true;
  paused = false;
  audio = new Audio()
  playing: string = ''

  constructor(private toolbarService: ToolbarService) {
  }

  search(value: string) {
    this.famousCollection = JSON.parse(JSON.stringify(musicians))
    this.famousCollection = this.famousCollection.filter(x => {
      if (x.name.toLowerCase().includes(value.toLowerCase())) {
        return true;
      } else if (x.items.find(x => x.name.toLowerCase().includes(value.toLowerCase()))) {
        x.items = x.items.filter(x => x.name.toLowerCase().includes(value.toLowerCase()));
        return true;
      } else {
        return false
      }

    })

  }

  ngOnInit(): void {
    this.toolbarService.changeTheme(true);
    this.famousCollection = musicians
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
