import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-vid',
  templateUrl: './background-vid.component.html',
  styleUrls: ['./background-vid.component.css']
})
export class BackgroundVidComponent implements OnInit {
  vidLink = "../../assets/vids/bier.mp4";

  constructor() { }

  ngOnInit(): void {
  }

}
