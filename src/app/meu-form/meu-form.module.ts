import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuFormComponent } from './meu-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MeuFormComponent],
  imports: [FormsModule, CommonModule],
  exports: [MeuFormComponent],
})
export class MeuFormModule {}
