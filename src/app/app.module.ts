/*Angular*/
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

/*modulos*/

import { PersonaModule } from './Persona/persona.module';
import { EstudianteModule } from './Estudiante/estudiante.module';
import { MaterialesModule } from './compartido/materiales.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GeneralModule} from "./general/general.module";
import {ErrorHandlerModule} from "./core/errors/error-handling.module";
import {CompartidosModule} from "./compartido/compartidos.module";



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [

    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    /*modulos personalizados*/
    GeneralModule,
    PersonaModule,
    EstudianteModule,
    ErrorHandlerModule,
    MaterialesModule,
    CompartidosModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

