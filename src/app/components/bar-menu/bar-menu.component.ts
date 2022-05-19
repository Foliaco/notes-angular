import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.css']
})
export class BarMenuComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  page(url?:string){
    this.router.navigate([url||''])
  }
  ngOnInit(): void {
  }

}
