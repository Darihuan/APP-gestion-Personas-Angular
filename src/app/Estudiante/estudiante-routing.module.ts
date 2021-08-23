import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from "../general/infrastructure/navbar/navbar.component";
import {PrincipalComponent} from "../general/infrastructure/principal/principal.component";
import {PersonaNavBarComponent} from "../Persona/infrastucture/persona-nav-bar/persona-nav-bar.component";
import {PrincipalPersonaComponent} from "../Persona/infrastucture/principal-persona/principal-persona.component";
import {FormPersonaComponent} from "../Persona/infrastucture/form-persona/form-persona.component";
import {ListarComponent} from "../Persona/infrastucture/listar/listar.component";
import {NavbarEstudianteComponent} from "./infrastucture/navbarEstudiante/navbar-estudiante.component";
import {PrincipalEstudianteComponent} from "./infrastucture/principalEstudiante/principal.component";
import {ListComponent} from "./infrastucture/list/list.component";

const estudianteRoutes: Routes = [
  {
    path: "estudiantes", component: NavbarEstudianteComponent,
    children: [
      {path: "home", component: PrincipalEstudianteComponent},
      {path: "list", component: ListComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(estudianteRoutes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule {
}
