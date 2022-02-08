import {Component, OnInit} from '@angular/core';
import {Musician, musicians, Song} from "../../prefilled";
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  famousCollection: Musician[] = [];
  currentSong: Song | undefined;
  currentMusician: Musician | undefined;
  name: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name') || '';

    if (!this.name) {
      this.router.navigate(['']);
    } else {
      this.famousCollection = musicians
      this.findMusician().then(x => console.log(this.name, this.currentMusician))
    }


  }

  findMusician() {
    return new Promise<void>((resolve, reject) => {
      this.currentMusician = musicians?.find(x => x.items.find((y: any) => {
        console.log(y.name, this.name)
        if (y.name.toLowerCase().includes(this.name.toLowerCase())) {
          this.currentSong = y;
          return true;
        } else {
          return false;
        }
      }))
      resolve()
    });
  }

}
