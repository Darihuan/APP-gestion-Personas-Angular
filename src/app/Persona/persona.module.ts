import { NgModule } from '@angular/core';


import { PersonaRoutingModule } from './persona-routing.module';
import {FormPersonaComponent} from "./infrastucture/form-persona/form-persona.component";
import {ListarComponent} from "./infrastucture/listar/listar.component";
import {PersonaNavBarComponent} from "./infrastucture/persona-nav-bar/persona-nav-bar.component";
import {PrincipalPersonaComponent} from "./infrastucture/principal-persona/principal-persona.component";
import {TarjetaPersonaComponent} from "./infrastucture/tarjeta-persona/tarjeta-persona.component";
import {MaterialesModule} from "../compartido/materiales.module";


@NgModule({
  declarations: [
    FormPersonaComponent,
    ListarComponent,
    PersonaNavBarComponent,
    PrincipalPersonaComponent,
    TarjetaPersonaComponent
  ],
  imports: [
    PersonaRoutingModule,
    MaterialesModule


  ]
})
export class PersonaModule { }
