import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrincipalComponent} from './general/infrastructure/principal/principal.component';
import {NavbarComponent} from "./general/infrastructure/navbar/navbar.component";
import {EstudianteModule} from "./Estudiante/estudiante.module";
import {PersonaModule} from "./Persona/persona.module";




const routes: Routes = [
  {
    path: "", component: PrincipalComponent, children: [
      {path:"estudiantes",loadChildren:()=>EstudianteModule},
      {path:"personas",loadChildren:()=>PersonaModule},
     ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{paramsInheritanceStrategy:"always"})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
