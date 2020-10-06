import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Output() toggleSideBarForMe:EventEmitter<any> = new EventEmitter(); //here i used output function for passing his data to default component

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit(); //Here i made toggleSideBar fucntion which is making an event for toggle then i go to html file
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
    }
  }
