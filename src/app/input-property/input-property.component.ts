import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // inputs: ['nomeCurso: nome'], // Essa é uma outra forma de dizer que esse componente recebe parâmetros, substitui o @Input, mas é melhor utilizar a forma com o decorator
})
export class InputPropertyComponent implements OnInit {
  // O decorator Input, permite o recebimento de parâmetros para essa classe
  @Input('nome') // Fora desse componente ele será tratado como nome, mas se não for passado nada, aí o nome seria nomeCurso tbm
  nomeCurso = ''; // Dentro dessa classe a propriedade chama-se nomeCurso

  constructor() {}

  ngOnInit(): void {}
}
