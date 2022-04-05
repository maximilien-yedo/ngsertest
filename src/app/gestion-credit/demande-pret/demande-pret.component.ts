import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PretService } from '../../services/pret.service';

@Component({
  selector: 'app-demande-pret',
  templateUrl: './demande-pret.component.html',
  styleUrls: ['./demande-pret.component.css']
})

export class DemandePretComponent implements OnInit {
  prets:any;
  clicker:any;
  constructor(private pretService: PretService,private router:Router) { }

  ngOnInit(): void {
    this.prets= this.pretService.prets;
  }
  onclick(){
    this.clicker = !this.clicker;
  }
  detail(id:number){
    this.router.navigate(["detail",id])
  }

}
