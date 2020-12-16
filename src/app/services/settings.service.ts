import { Injectable, OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');

  constructor() {
    const urlTheme = localStorage.getItem('theme') || './assets/css/colors/default.css';
    this.linkTheme.setAttribute('href', urlTheme);
   }

   changeTheme(theme: string, links: NodeListOf<Element>): void{
    const urlTheme = `./assets/css/colors/${theme}.css`;

    this.linkTheme.setAttribute('href', urlTheme);
    localStorage.setItem('theme', urlTheme);
    this.checkCurrentTheme(links);
  }

  checkCurrentTheme(links: NodeListOf<Element>): void{
    //const links = document.querySelectorAll('.selector');
    links.forEach(element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        element.classList.add('working');
      }
    });
  }
}
