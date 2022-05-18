import { Injectable } from "@angular/core";
import data from "../data/notes.json";
import { INotes } from "../interfaces/notes.interfaces";
import { PersonaModel } from "../models/personas.model";
@Injectable({
  providedIn:'root' // esto es parra que quede global en los componentes
})
export class UsuarioServices{
  private notas:INotes[]=data;
  private personas=  [{
    "nombre":"manuel",
    "edad":20
  },
  {
    "nombre":"pepe",
    "edad":12
  },
  {
    "nombre":"juan",
    "edad":6
  }
  ]
  getUsuarios():PersonaModel[]{
    return this.personas;
  }
  setPersonas(persona:PersonaModel):void{
    this.personas.push(persona);
  }
  deletePersona(nombre:string){

    let i:number=this.personas.findIndex(e=>e.nombre==nombre);
    this.personas.splice(i,1);
  }
  getNotas(){
    return this.notas;
  }
  setNotas(nota:INotes){
    this.notas.push(nota);
    return true;
  }
}
