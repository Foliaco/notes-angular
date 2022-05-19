import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarMenuComponent } from './components/bar-menu/bar-menu.component';
import { NotesComponent } from './components/notes/notes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { QueryContentComponent } from './components/query-content/query-content.component';
import { PersonaTargetComponent } from './components/persona-target/persona-target.component';
import { Page2Component } from './components/page2/page2.component';
import { Page1Component } from './components/page1/page1.component';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BarMenuComponent,
    NotesComponent,
    UsuariosComponent,
    MensajeComponent,
    QueryContentComponent,
    PersonaTargetComponent,
    Page2Component,
    Page1Component,
    NumbersOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
