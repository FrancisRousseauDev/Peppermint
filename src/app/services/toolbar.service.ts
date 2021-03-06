import { Injectable } from '@angular/core';
import {ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  darkTheme = false;
  $changeTheme: ReplaySubject<any> = new ReplaySubject<any>();

  constructor() { }

  changeTheme(value?: boolean) {
    if (value) {
      this.darkTheme = value;
    } else {
      if (value === undefined) {
        this.darkTheme = !this.darkTheme;
      } else {
        this.darkTheme = false
      }
    }
    console.log('changed theme', this.darkTheme)
    this.$changeTheme.next(this.darkTheme);
  }
}
