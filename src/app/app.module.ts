import { BrowserModule } from '@angular/platform-browser'; // Archivos importados desde angular
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';

@NgModule({  // decoracion, es una funcion, sirbe para describir el funcionamiento del modulo
  // componentes, pipes o directivas que son visibles en el modulo
  declarations: [
    AppComponent, ToolbarComponent, CardComponent // si quiero usar un componente tengo que declararlo
  ],
  // Importamos modulos
  imports: [
    BrowserModule
  ],

  // Servicios (singleton, es una clase que solo tiene una instancia durante toda su ejecucion patron de diseño) disponibles en el modulo
  providers: [],

  // El componente que se ejecuta primero
  bootstrap: [AppComponent],

  // componentes, pipes, directivas o servicios se exportan
  exports: []
})
export class AppModule { }
