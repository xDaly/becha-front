import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-second-navbar',
  templateUrl: './second-navbar.component.html',
  styleUrls: ['./second-navbar.component.scss']
})
export class SecondNavbarComponent implements OnInit {

  public isCollapsed :boolean = true;

  constructor() {

   }

  ngOnInit(): void {
  }
  open(){
    this.isCollapsed = false
  }
  close(){ 
    this.isCollapsed = true
  }

 



}
