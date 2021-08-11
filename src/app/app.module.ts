import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import {  HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

import {MatCommonModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NuevaPersonaComponent } from './Persona/nueva-persona/nueva-persona.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrincipalComponent } from './principal/principal.component';
import { ListarComponent } from './Persona/listar/listar.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { TarjetaPersonaComponent } from './Persona/tarjeta-persona/tarjeta-persona.component'
import {MatBadgeModule} from '@angular/material/badge';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    NuevaPersonaComponent,
    NavbarComponent,
    PrincipalComponent,
    ListarComponent,
    TarjetaPersonaComponent,
    SidenavComponent,
 
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

