import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  moduleId: module.id,
})
export class ContactComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    alert("Can I go back? " + this.routerExtensions.canGoBack());
  }

}
