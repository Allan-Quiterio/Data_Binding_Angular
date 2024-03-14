import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css'],
})
export class CicloVidaComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input()
  valorInicial = 10;

  constructor() {
    this.log('construtor');
  }

  // OnChanges é muito utilizado, pois se o Input Property é disparado, o que acontece na linha 30, somente o ngOnChanges é disparado na mudança e não o onInit
  ngOnChanges() {
    this.log('ngOnChanges');
  }

  // Geralmente nesse método é onde fazemos a chamada para o servidor
  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  //Muito utilizado também para a finalização do ciclo de vida de um componente, para não ficar com ele consumindo recursos sem estar sendo utilizado.
  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  log(msg: string) {
    console.log(msg);
  }
}
