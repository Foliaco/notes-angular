import { Component, OnInit } from '@angular/core';
import { INotes } from 'src/app/interfaces/notes.interfaces';
import data from "../../data/notes.json";
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  user:string;
  notesData:INotes[];

  constructor() {
    this.user='Miguel';
    this.notesData=data;
  }

  ngOnInit(): void {
  }

}
