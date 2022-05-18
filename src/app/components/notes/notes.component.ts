import { Component, OnInit } from '@angular/core';
import { INotes } from 'src/app/interfaces/notes.interfaces';
import { UsuarioServices } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  user:string;
  notesData:INotes[];

  constructor(private userServices:UsuarioServices) {
    this.user='Miguel';
    this.notesData=userServices.getNotas();
  }

  ngOnInit(): void {
  }

}
