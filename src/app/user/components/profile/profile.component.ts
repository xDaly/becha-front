import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _location:Location) {
   }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }
  backClicked() {
    this._location.back();
  }

}
