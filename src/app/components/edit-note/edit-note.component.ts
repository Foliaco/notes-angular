import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    notesForm=new FormControl();
  }

}
