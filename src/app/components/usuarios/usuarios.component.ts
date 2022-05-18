import { Component, OnInit } from '@angular/core';
import { UsuarioServices } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers:[
    UsuarioServices
  ]
})
/**
 * registrar por providers
 *   providers:[
    UsuarioServices
  ]
  esto de manera local en el archivo en que se encuentra
  *
  *
  *
  *
  *
 */
export class UsuariosComponent implements OnInit {

  personas:{nombre:string,edad:number}[]=[];
  constructor(private usuarioServices: UsuarioServices) {//REGISTAR EL SERVICIO
    this.personas=usuarioServices.getUsuarios();
   }

  ngOnInit(): void {
  }

}
