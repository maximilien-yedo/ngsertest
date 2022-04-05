import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashin',
  templateUrl: './cashin.component.html',
  styleUrls: ['./cashin.component.css']
})
export class CashinComponent implements OnInit {

  clicker:any;
  constructor() { }

  ngOnInit(): void {
  }

  onclick(){
    this.clicker = !this.clicker;
  }

}
