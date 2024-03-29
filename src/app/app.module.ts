import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { MeuFormModule } from './meu-form/meu-form.module';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida.component';

@NgModule({
  declarations: [AppComponent, DataBindingComponent, InputPropertyComponent, OutputPropertyComponent, CicloVidaComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule, MeuFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
