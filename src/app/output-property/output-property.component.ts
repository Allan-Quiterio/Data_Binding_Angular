import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

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

  // A ideia é acessar a variável ou o valor direto do Input lá do HTML
  @ViewChild('campoInput')
  campoValorInput: ElementRef;

  incrementa() {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({
      novoValor: this.campoValorInput.nativeElement.value,
    });
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({
      novoValor: this.campoValorInput.nativeElement.value,
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
