import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import {NavbarEstudianteComponent} from "./infrastucture/navbarEstudiante/navbar-estudiante.component";
import {DetallesComponent} from "./infrastucture/detalles/detalles.component";
import {PrincipalEstudianteComponent} from "./infrastucture/principalEstudiante/principal.component";
import {FormularioComponent} from "./infrastucture/formulario/formulario.component";
import {ListComponent} from "./infrastucture/list/list.component";
import {MaterialesModule} from "../general/materiales.module";


@NgModule({
  declarations: [
    NavbarEstudianteComponent,
    DetallesComponent,
    PrincipalEstudianteComponent,
    FormularioComponent,
    ListComponent
  ],
  imports: [

    EstudianteRoutingModule,
    MaterialesModule


  ]
})
export class EstudianteModule { }
