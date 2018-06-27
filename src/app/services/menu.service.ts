import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs'; // funciones de rxjs
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // modulo principal define donde se encuentra el servicio angular 6
})
export class MenuService {

  constructor() {}

  loadMenu(): Observable<Menu[]> {
  // let arr = ['Dario', 'Fernando'].map(x => x.length); proceso sincrono
  return timer(500)
  .pipe(
    map(() => {
      return [
        {chef: 'Dario Ch', date: new Date(), img: '../../assets/img/imagen.jpg' },
        {chef: 'Fernando Ch', date: new Date(), img: '../../assets/img/imagen.jpg' },
        {chef: 'Chamorro', date: new Date(), img: '../../assets/img/imagen.jpg' },
        {chef: 'Pepito', date: new Date(), img: '../../assets/img/imagen.jpg' },
        {chef: 'Juanito', date: new Date(), img: '../../assets/img/imagen.jpg' },
        {chef: 'Luis', date: new Date(), img: '../../assets/img/imagen.jpg' },
      ];
    })
  );
  }

}

export class Menu {
  constructor(public img: string, public chef: string, public date: Date) {}
}
