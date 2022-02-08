import { Component, OnInit } from '@angular/core';
import {ToolbarService} from "../../services/toolbar.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private toolbarService: ToolbarService) { }

  ngOnInit(): void {
    this.toolbarService.changeTheme(false);
  }

}
