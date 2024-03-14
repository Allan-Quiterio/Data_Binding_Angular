import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css'],
  // Outra forma de declarar CSS, css inline, recomendado fazer dessa forma quando tem um único estilo dessa forma, passou disso é melhor usar um arquivo à parte
  styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `,
  ],
})
export class DataBindingComponent implements OnInit {
  url = 'http://loiane.com';
  cursoAngular = true;

  urlImage = 'https://picsum.photos/200/300.jpg';

  valorAtual = '';
  valorSalvo = '';

  isMouseOver = false;

  nomeDoCurso = 'Angular';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valorSalvo) {
    this.valorSalvo = valorSalvo;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  constructor() {}

  ngOnInit(): void {}
}
