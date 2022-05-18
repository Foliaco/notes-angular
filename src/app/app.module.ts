import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarMenuComponent } from './components/bar-menu/bar-menu.component';
import { NotesComponent } from './components/notes/notes.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { QueryContentComponent } from './components/query-content/query-content.component';

@NgModule({
  declarations: [
    AppComponent,
    BarMenuComponent,
    NotesComponent,
    EditNoteComponent,
    UsuariosComponent,
    MensajeComponent,
    QueryContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
