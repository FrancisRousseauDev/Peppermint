import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ToolbarService} from "../../services/toolbar.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  clicked = false;
  darkTheme = false;
  constructor(private router: Router, private toolbarService: ToolbarService) { }

  ngOnInit(): void {
    this.toolbarService.$changeTheme.subscribe(x => {
      this.darkTheme = x;
    })
  }

  routeToExplore() {
    this.router.navigate(['explore'])
  }
  routeToMain() {
    this.router.navigate([''])
  }
  routeToCreate() {
    this.router.navigate(['create'])
  }
}
