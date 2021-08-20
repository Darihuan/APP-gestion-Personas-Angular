/*Angular*/
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

/*componentes*/
import {NuevaPersonaComponent} from "./Persona/infrastucture/nueva-persona/nueva-persona.component";
import {ListarComponent} from './Persona/infrastucture/listar/listar.component';
import {NavbarComponent} from './general/infrastructure/navbar/navbar.component';

import {PrincipalComponent} from './general/infrastructure/principal/principal.component';
import {TarjetaPersonaComponent} from './Persona/infrastucture/tarjeta-persona/tarjeta-persona.component';


/*angular meterials*/
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCommonModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {ListComponent} from "./Estudiante/infrastucture/list/list.component";
import {FormularioComponent} from "./Estudiante/infrastucture/formulario/formulario.component";
import {PrincipalEstudianteComponent} from "./Estudiante/infrastucture/principalEstudiante/principal.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {DetallesComponent} from './Estudiante/infrastucture/detalles/detalles.component';
import {SidebarComponent} from './general/infrastructure/sidebar/sidebar.component';
import {AlertCardComponent} from './general/infrastructure/alertc-card/alert-card.component';
import {NavbarEstudianteComponent} from "./Estudiante/infrastucture/navbarEstudiante/navbar-estudiante.component";
import { PersonaNavBarComponent } from './Persona/infrastucture/persona-nav-bar/persona-nav-bar.component';
import {PrincipalPersonaComponent} from "./Persona/infrastucture/principal-persona/principal-persona.component";



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ListarComponent,
    TarjetaPersonaComponent,
    NavbarComponent,
    NuevaPersonaComponent,
    ListComponent,
    FormularioComponent,
    PrincipalEstudianteComponent,
    DetallesComponent,
    SidebarComponent,
    AlertCardComponent,
    NavbarEstudianteComponent,
    PersonaNavBarComponent,
    PrincipalPersonaComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCommonModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatCardModule,
    MatDividerModule,
    MatBadgeModule,
    MatSidenavModule,
    MatExpansionModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

