import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demandefin',
  templateUrl: './demandefin.component.html',
  styleUrls: ['./demandefin.component.css']
})
export class DemandefinComponent implements OnInit {
  clicker:any;
  constructor() { }

  ngOnInit(): void {
  }

  onclick(){
    this.clicker = !this.clicker;
  }

}
