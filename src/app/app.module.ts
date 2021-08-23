/*Angular*/
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

/*componentes*/

import {NavbarComponent} from './general/infrastructure/navbar/navbar.component';
import {PrincipalComponent} from './general/infrastructure/principal/principal.component';
import {SidebarComponent} from './general/infrastructure/sidebar/sidebar.component';
import {AlertCardComponent} from './general/infrastructure/alert-card/alert-card.component';



/*modulos*/

import { PersonaModule } from './Persona/persona.module';
import { EstudianteModule } from './Estudiante/estudiante.module';
import { MaterialesModule } from './general/materiales.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";






@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavbarComponent,
    SidebarComponent,
    AlertCardComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    /*modulos personalizados*/
    PersonaModule,
    EstudianteModule,
    MaterialesModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

