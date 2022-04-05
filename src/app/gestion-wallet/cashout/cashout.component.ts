import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashout',
  templateUrl: './cashout.component.html',
  styleUrls: ['./cashout.component.css']
})
export class CashoutComponent implements OnInit {

  clicker:any;
  constructor() { }

  ngOnInit(): void {
  }

  onclick(){
    this.clicker = !this.clicker;
  }

}
