import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  itemFormCtrl = new FormControl("vanessa here");
  icecreamFormCtrl = new FormControl();
  colors: string[] = ["red", "green", "blue"];
  dropdownFormCtrl = new FormControl("");
  openAccordionGroup = "false";
  constructor(private router: Router) { }
  onChange(event: any) {
    console.log("onChange with event ", event);
  }
  onClickAccordion() {
    this.openAccordionGroup = this.openAccordionGroup === "true" ? "false" : "true";
  }
  onClick() {
    this.router.navigate(['/work-experience']);
  }
}
