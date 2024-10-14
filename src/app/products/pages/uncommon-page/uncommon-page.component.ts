import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n se debe al idioma que cambia algunas oalabras

  //i18n Select - necesaita de un map para elejir las opciones
  public name: string = 'Sebastian';
  public gender: 'male'| 'female' = 'male';
  public invitatinMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void{
    this.name = 'Melisa';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = ['Maria', 'Ana', 'Pedro', 'Fernando', 'Pepe'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperado',
    '=1': 'tenemos un cliente esperado',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void{
    this.clients.shift();
  }

  //json - keyvalue
  public person = {
    name: 'Sebastian',
    lastname: 'Velasquez',
    age: 24
  }

  //async pipe - se suscribe y desuscribe de manera automatica en observable
  public myObservableTimer = interval(2000);

}
