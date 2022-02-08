import { Component, OnInit } from '@angular/core';
import {ToolbarService} from "../../services/toolbar.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  description = '';
  price = '';
  name = '';
  background = '';
  fileToUpload: File | null = null;

  constructor(private toolbar: ToolbarService) { }

  ngOnInit(): void {
    this.toolbar.changeTheme(true);
  }
  handleFileInput(files: any ) {
    console.log(files)
    this.fileToUpload = files.event.files.item(0);
  }
}
