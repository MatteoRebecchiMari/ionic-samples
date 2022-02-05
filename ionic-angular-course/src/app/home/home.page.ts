import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Typescript propertyName : Type
  text: String;

  constructor() {
    this.text = "Initial text value";
  }

  onTextChanged() {
    this.text = "Text changes!";
  }

}
