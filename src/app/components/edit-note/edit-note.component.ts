import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioServices } from 'src/app/services/usuarios.service';
//import {FormControl} from "@angular/forms";
@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  constructor(private userServices:UsuarioServices) { }

  formNote=new FormGroup({
    title:new FormControl('',Validators.required),
    body:new FormControl('',Validators.required)
  });
  disable:boolean=true;
  isActive:boolean=false;
  note={
    title:"escribe aqui tu titulo",
    body:"Aqui tu body"
  }

  titleInput2:string='one title';
  saveNote(e:Event){
    //this.userServices.setNotas({title:this.formNote.get('title'),body:this.formNote.get('body')}) //save data in note
  }


  ngOnInit(): void {
  }

}
