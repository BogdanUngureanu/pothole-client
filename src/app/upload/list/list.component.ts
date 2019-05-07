import { Component, OnInit } from '@angular/core';
import {Camera} from "@ionic-native/camera/ngx";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  images = [];

  constructor(private camera: Camera, public httpClient: HttpClient) { }

  async ngOnInit() {
    let json = await fetch('http://localhost:8000/potholes');
    this.images = (await json.json()).data;
console.log(this.images)
  }
}
