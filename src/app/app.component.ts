import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { registerLocaleData } from '@angular/common';
import localeTW from '@angular/common/locales/zh';
registerLocaleData(localeTW);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pi = 3.14;
  e = 2.718281828459045;
  textCount = 0;
  keyword = '';
  constructor() {
  }
  resetWord() {
    this.keyword = '';
  }

  clickContainer(theader: HeaderComponent) {
    theader.title = 'test';
  }



}
