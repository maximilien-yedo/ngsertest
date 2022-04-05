import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demansous2',
  templateUrl: './demansous2.component.html',
  styleUrls: ['./demansous2.component.css']
})
export class Demansous2Component implements OnInit {
  clicker:any;
  constructor() { }

  ngOnInit(): void {
  }

  onclick(){
    this.clicker = !this.clicker;
  }

}
