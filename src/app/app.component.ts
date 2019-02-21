import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kalkulator';

  sum:number ;
  calculate1(first:number, second:number) {
  this.sum = +first + +second ;
  }
  sum:number ;
  calculate2(first:number, second:number) {
  this.sum = +first - +second ;
  }
  sum:number ;
  calculate3(first:number, second:number) {
  this.sum = +first * +second ;
  }
  sum:number ;
  calculate4(first:number, second:number) {
  this.sum = +first / +second ;
  }	
}
