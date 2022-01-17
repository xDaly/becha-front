import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {
  time: number;

  constructor() { }

  ngOnInit(): void {
    this.time = Date.now()
  }

}
