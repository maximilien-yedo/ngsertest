import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet';
  survoler:boolean = true;

  constructor() {

  }

  ngOnInit(): void {
  }
  survol(){
    this.survoler = !this.survoler;
    console.log(this.survoler);
  }
}
