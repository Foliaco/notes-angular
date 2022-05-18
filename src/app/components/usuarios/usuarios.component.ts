import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PersonaModel } from 'src/app/models/personas.model';
import { UsuarioServices } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers:[
    UsuarioServices
  ]
})

export class UsuariosComponent implements OnInit {

  personas:PersonaModel[]=[];
  constructor(private usuarioServices: UsuarioServices) {//REGISTAR EL SERVICIO
    this.personas=usuarioServices.getUsuarios();
   }
   nombreInput:string='';
   edadInput:number=0;
   edit:boolean=false;
   idEdit:string;
   num:number=3000;
   fecha:Date=new Date()

   @ViewChild('_nombreInput2') nombreInput2:ElementRef;//recuperar un elemento de referencia local

   helloWorld(_nombreInput:HTMLInputElement){
      console.log(_nombreInput.value)
      console.log("referencia por @Viewchild",this.nombreInput2.nativeElement.value)
   }

   savePersona(){
    let check=this.personas.find(e=>e.nombre===this.nombreInput);
    if(check!==undefined){
      console.log(check)
      alert("Ya existe una persona asi");
      return;
    }
    if(this.edadInput<=0){
      alert("La edad no puede ser menor o igual que 0")
      return;
    }
    let persona1=new PersonaModel(this.nombreInput,this.edadInput);
    this.usuarioServices.setPersonas(persona1);
    this.edit=false;
    this.edadInput=0;
    this.nombreInput="";
   }

   getData(person:PersonaModel){
     console.log(person)
     //let personfind=this.personas.findIndex(e=>e.nombre===person.nombre);
     this.idEdit=person.nombre;
     this.nombreInput=person.nombre;
     this.edadInput=person.edad;
     this.edit=true;
   }

   editPersona(){
    let findPersona=this.personas.findIndex(e=>e.nombre===this.idEdit);
    this.personas[findPersona].nombre=this.nombreInput;
    this.personas[findPersona].edad=this.edadInput;
    this.edit=false;
    this.edadInput=0;
    this.nombreInput="";
  }
  ngOnInit(): void {
  }

}
