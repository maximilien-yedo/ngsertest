import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-wallet',
  templateUrl: './gestion-wallet.component.html',
  styleUrls: ['./gestion-wallet.component.css']
})
export class GestionWalletComponent implements OnInit {

  clicker:any;
  survoler:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  Onmodif(){
    this.clicker = !this.clicker
  }
  survol(){
    this.survoler = !this.survoler;
    console.log(this.survoler);
  }
  onclick(){
    this.clicker = !this.clicker;
  }

}
