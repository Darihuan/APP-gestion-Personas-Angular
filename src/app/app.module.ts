
/*Angular*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

/*componentes*/
import {NuevaPersonaComponent} from "./components/Persona/nueva-persona/nueva-persona.component";
import { ListarComponent } from './components/Persona/listar/listar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { PrincipalComponent } from './components/principal/principal.component';
import { TarjetaPersonaComponent } from './components/Persona/tarjeta-persona/tarjeta-persona.component';


/*angular meterials*/
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCommonModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ListarComponent,
    TarjetaPersonaComponent,
    NavbarComponent,
    NuevaPersonaComponent


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
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
    MatBadgeModule,
    MatSidenavModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

