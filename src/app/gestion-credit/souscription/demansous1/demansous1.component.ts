import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PretService } from '../../../services/pret.service';

@Component({
  selector: 'app-demansous1',
  templateUrl: './demansous1.component.html',
  styleUrls: ['./demansous1.component.css']
})
export class Demansous1Component implements OnInit {
  pret:any;
  clicker:any;
  constructor(private pretService: PretService,private route : ActivatedRoute,) { }


  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.pret = this.pretService.getIdPrets(+id);
  }
  onclick(){
    this.clicker = !this.clicker;
  }

}
