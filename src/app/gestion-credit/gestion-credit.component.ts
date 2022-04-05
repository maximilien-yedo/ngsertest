import { Component, OnInit } from '@angular/core';
import { PretService } from '../services/pret.service';

@Component({
  selector: 'app-gestion-credit',
  templateUrl: './gestion-credit.component.html',
  styleUrls: ['./gestion-credit.component.css']
})
export class GestionCreditComponent implements OnInit {
  clicker:any;
  prets:any=[]
  constructor(private pretService: PretService,) { }

  ngOnInit(): void {
    this.prets=this.pretService.prets;
  }
  onclick(){
    this.clicker = !this.clicker;
  }

}
