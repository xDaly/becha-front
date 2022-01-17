import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor() {
    document.body.style.backgroundColor = "#1f2029";
   }

  ngOnInit(): void {
  }

ngOnDestroy(){
  document.body.style.backgroundColor = "unset";
}

}
