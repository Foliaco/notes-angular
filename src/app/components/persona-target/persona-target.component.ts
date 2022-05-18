import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonaModel } from 'src/app/models/personas.model';
import { UsuarioServices } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-persona-target',
  templateUrl: './persona-target.component.html',
  styleUrls: ['./persona-target.component.css']
})
export class PersonaTargetComponent implements OnInit {

  @Input() persona:PersonaModel;
  @Input() i:number;
  @Output() outPerson= new EventEmitter<PersonaModel>();

  constructor(private usuarioServices:UsuarioServices) { }

  deletePersona(nombre:string){
    this.usuarioServices.deletePersona(nombre);
  }
  editPersona(persona:PersonaModel){
      this.outPerson.emit(persona);
  }
  ngOnInit(): void {
  }

}
