import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-interface',
  templateUrl: './contact-interface.component.html',
  styleUrls: ['./contact-interface.component.scss']
})
export class ContactInterfaceComponent implements OnInit {

  constructor() {
    document.body.style.backgroundColor = "#000";
   }

  ngOnInit(): void {
  }

ngOnDestroy(){
  document.body.style.backgroundColor = "#e8ebf1";
}

}
