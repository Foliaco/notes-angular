import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  index:number;
  constructor(
    private routerLink:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.index=this.routerLink.snapshot.params['id'];
    console.log(this.routerLink.snapshot.queryParams);
  }

}
