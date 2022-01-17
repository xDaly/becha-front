import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admininterface',
  templateUrl: './admininterface.component.html',
  styleUrls: ['./admininterface.component.scss']
})
export class AdmininterfaceComponent implements OnInit {

  constructor() {
   
   }

  ngOnInit(): void {
    let bootstrapjs = document.createElement("script");
    bootstrapjs.type = "text/javascript";
    bootstrapjs.async = true;
    bootstrapjs.src = "https://demo.dashboardpack.com/architectui-html-free/assets/scripts/main.js";
    document.body.appendChild(bootstrapjs);
  }

}
