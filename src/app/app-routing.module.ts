import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './Persona/infrastucture/listar/listar.component';
import { PrincipalComponent } from './Persona/infrastucture/principal/principal.component';
import {NuevaPersonaComponent} from "./Persona/infrastucture/nueva-persona/nueva-persona.component";
import {NavbarEstudianteComponent} from "./Estudiante/infrastucture/navbarEstudiante/navbar-estudiante.component";
import {ListComponent} from "./Estudiante/infrastucture/list/list.component";
import {PrincipalEstudianteComponent} from "./Estudiante/infrastucture/principalEstudiante/principal.component";

const routes: Routes = [
  {path:"",component:PrincipalComponent},
  {path: "crear", component: NuevaPersonaComponent},
  {path: "actualizar/:id", component: NuevaPersonaComponent},
  {path:"listar",component:ListarComponent},

  {path:"estudiantes",component:NavbarEstudianteComponent,
  children:[
  {
    path:"home",
    component:PrincipalEstudianteComponent
  },
  {
    path:"list",
    component:ListComponent
  }
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
