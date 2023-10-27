import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(valor: number): string {
    switch (valor) {
      case 0:
        return 'rojo';
        break;
      case 1:
        return 'negro';
        break;
      case 2:
        return 'azul';
        break;
      case 3:
        return 'verde';
        break;
      default:
        return 'incoloro';
    }
  }

}
