import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'toggleCase'
})
//PipeTransform: se va a llamar para hacer la transformacion visual de la data
export class ToggleCasePipe implements PipeTransform{

  //value:  valor que va a manejar, lo que se va a tansformar
  //args: argumentos que va a recibir el pipe
  // transform(value: string, ...args: any[]): string {
  transform(value: string, toUpper: boolean = false): string {
    return (toUpper) ? value.toUpperCase() : value.toLowerCase();
  }
}
