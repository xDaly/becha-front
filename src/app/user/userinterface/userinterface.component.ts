import { Component, OnInit } from '@angular/core';
import {UserinfoService}  from '../services';

@Component({
  selector: 'app-userinterface',
  templateUrl: './userinterface.component.html',
  styleUrls: ['./userinterface.component.scss']
})
export class UserinterfaceComponent implements OnInit {

  constructor(private service:UserinfoService) {

  }

 
  ngOnInit(): void {


  }


}
