import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  survoler:boolean = true;
  clicker:any;
  constructor() {

  }

  ngOnInit(): void {
  }
  survol(){
    this.survoler = !this.survoler;
  }
  onclick(){
    this.clicker = !this.clicker;
  }

}
