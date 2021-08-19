import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './components/Persona/listar/listar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import {NuevaPersonaComponent} from "./components/Persona/nueva-persona/nueva-persona.component";
import {NavbarEstudianteComponent} from "./components/navbarEstudiante/navbar-estudiante.component";
import {ListComponent} from "./components/Estudiante/list/list.component";
import {PrincipalEstudianteComponent} from "./components/principalEstudiante/principal.component";

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
