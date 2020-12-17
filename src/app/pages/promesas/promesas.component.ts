import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then(resp => {
      console.log(resp);
    }
    );
    /* const promesa = new Promise((resolve, reject ) => {
      if (false) {
        resolve('probando');
      } else {
        reject('fail con la promesa');
      }
    });
    promesa.then((mensaje) => {
      console.log(mensaje);
    }).catch(error => console.log('error en la promesa: '+ error)
    ); */
}
  getUsuarios(): Promise<unknown> {
    return new Promise(resolve => {
      fetch('https://reqres.in/api/users')
          .then(resp => resp.json())
          .then(body => resolve(body.data)
          );
    });
  }
}
