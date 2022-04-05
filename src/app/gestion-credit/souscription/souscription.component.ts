import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PretService } from '../../services/pret.service';

@Component({
  selector: 'app-souscription',
  templateUrl: './souscription.component.html',
  styleUrls: ['./souscription.component.css']
})
export class SouscriptionComponent implements OnInit {
  prets:any;
  clicker:any;

  constructor(private pretService: PretService,private router:Router) { }


  ngOnInit(): void {
    this.prets= this.pretService.prets;
  }
  onclick(){
    this.clicker = !this.clicker;
  }
  demsous(id:number){
    this.router.navigate(["demsous",id])
  }

}
