import { Injectable } from "@angular/core";
import data from "../data/notes.json";
import { INotes } from "../interfaces/notes.interfaces";
@Injectable({
  providedIn:'root' // esto es parra que quede global en los componentes
})
export class UsuarioServices{
  private notas:INotes[]=data;
  getUsuarios(){
    return[
      {
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
  }
  getNotas(){
    return this.notas;
  }
  setNotas(nota:INotes){
    this.notas.push(nota);
    return true;
  }
}