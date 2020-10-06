import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true; //First i made variable which set sidebar to false then go to the html file

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler(value){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
