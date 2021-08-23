import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from "../general/infrastructure/navbar/navbar.component";
import {PrincipalComponent} from "../general/infrastructure/principal/principal.component";
import {PersonaNavBarComponent} from "./infrastucture/persona-nav-bar/persona-nav-bar.component";
import {PrincipalPersonaComponent} from "./infrastucture/principal-persona/principal-persona.component";
import {FormPersonaComponent} from "./infrastucture/form-persona/form-persona.component";
import {ListarComponent} from "./infrastucture/listar/listar.component";
import {NavbarEstudianteComponent} from "../Estudiante/infrastucture/navbarEstudiante/navbar-estudiante.component";
import {PrincipalEstudianteComponent} from "../Estudiante/infrastucture/principalEstudiante/principal.component";
import {ListComponent} from "../Estudiante/infrastucture/list/list.component";

const routes: Routes = [
  {

    path: "personas", component: PersonaNavBarComponent, children: [
      {path: "home", component: PrincipalPersonaComponent},
      {path: "crear", component: FormPersonaComponent},
      {path: "actualizar/:id", component: FormPersonaComponent},
      {path: "list", component: ListarComponent}
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule {
}
