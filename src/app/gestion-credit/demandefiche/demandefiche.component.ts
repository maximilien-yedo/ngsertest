import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demandefiche',
  templateUrl: './demandefiche.component.html',
  styleUrls: ['./demandefiche.component.css']
})
export class DemandeficheComponent implements OnInit {
  clicker:any;
  constructor() { }

  ngOnInit(): void {
  }

  onclick(){
    this.clicker = !this.clicker;
  }

}
