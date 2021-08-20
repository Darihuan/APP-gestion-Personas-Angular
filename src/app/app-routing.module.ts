import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ListarComponent} from './Persona/infrastucture/listar/listar.component';
import {PrincipalComponent} from './general/infrastructure/principal/principal.component';
import {NuevaPersonaComponent} from "./Persona/infrastucture/nueva-persona/nueva-persona.component";
import {ListComponent} from "./Estudiante/infrastucture/list/list.component";
import {PrincipalEstudianteComponent} from "./Estudiante/infrastucture/principalEstudiante/principal.component";
import {NavbarComponent} from "./general/infrastructure/navbar/navbar.component";
import {NavbarEstudianteComponent} from "./Estudiante/infrastucture/navbarEstudiante/navbar-estudiante.component";
import {PersonaNavBarComponent} from "./Persona/infrastucture/persona-nav-bar/persona-nav-bar.component";
import {PrincipalPersonaComponent} from "./Persona/infrastucture/principal-persona/principal-persona.component";



const routes: Routes = [
  {
    path: "", component: NavbarComponent, children: [
      {path: "", component: PrincipalComponent},
      {
        path: "personas", component: PersonaNavBarComponent, children: [
          {path: "home", component: PrincipalPersonaComponent},
          {path: "crear", component: NuevaPersonaComponent},
          {path: "actualizar/:id", component: NuevaPersonaComponent},
          {path: "list", component: ListarComponent}
        ]
      },
      {
        path: "estudiantes", component: NavbarEstudianteComponent,
        children: [
          {path: "home", component: PrincipalEstudianteComponent},
          {path: "list", component: ListComponent}
        ]
      }]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
