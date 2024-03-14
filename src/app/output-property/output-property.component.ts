import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  // outputs: [mudouValor] // Novamente é uma outra forma de adicionar um parâmetro de saída ao invés do @Output, mas é mais recomendado da forma com o decorator a baixo.
})
export class OutputPropertyComponent implements OnInit {
  @Input()
  valorInicial: number;

  // Como precisamos expor esse dado para o outro componente utilizamos o @Output para indicar a saída do dado
  @Output()
  mudouValor = new EventEmitter(); // EventEmitter é um evento de emissão de algo do Angular

  incrementa() {
    this.valorInicial++;
    this.mudouValor.emit({ novoValor: this.valorInicial });
  }

  decrementa() {
    this.valorInicial--;
    this.mudouValor.emit({ novoValor: this.valorInicial });
  }

  constructor() {}

  ngOnInit(): void {}
}
