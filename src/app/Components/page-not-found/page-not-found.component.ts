import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reno-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  pageHeader:  string = 'Ooops!!!';
  pageContent:  string = 'Page Not Found!!!';

  constructor() { }

  ngOnInit() {
  }

}
