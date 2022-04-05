import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  clicker:any;
  survoler:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onclick(){
    this.clicker = !this.clicker;
  }
  Onmodif(){
    this.clicker = !this.clicker
  }
  survol(){
    this.survoler = !this.survoler;
    console.log(this.survoler);
  }


}
