import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import data from "../data/notes.json";
import { INotes } from "../interfaces/notes.interfaces";
import { PersonaModel } from "../models/personas.model";
import { Observable } from "rxjs";
@Injectable({
  providedIn:'root' // esto es parra que quede global en los componentes
})
export class UsuarioServices{
  private notas:INotes[]=data;
  private personas:PersonaModel[]= []
  constructor(private httpCLient:HttpClient){

  }
  obtenerUsuarios():Observable<PersonaModel[]>{
    return this.httpCLient.get<PersonaModel[]>('https://listado-angular-c2212-default-rtdb.firebaseio.com/data.json');
  }
   getUsuarios():PersonaModel[]{
    return[]
  }
  setPersonas(persona:PersonaModel):void{
    console.log('ok')
    try{
      this.httpCLient.post('https://listado-angular-c2212-default-rtdb.firebaseio.com/data.json',persona)
      .subscribe(res=>console.log("guardado de personas ",res)
      )
    }
    catch(err){
      console.log("El error es ",err)
    }
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
