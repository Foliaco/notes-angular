import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import {FormControl} from "@angular/forms";
@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  constructor() { }

  formNote=new FormGroup({
    title:new FormControl('',Validators.required),
    body:new FormControl('',Validators.required)
  });
  disable:boolean=true;
  isActive:boolean=false;

  saveNote(e:Event){
    alert("Ok")
  }


  ngOnInit(): void {
  }

}
