import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  titulo = 'Contador';
  valor = 0;

  increment(){
    this.valor++;
  }

  decrement() {
    this.valor--;
  }
}
