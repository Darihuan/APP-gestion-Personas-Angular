import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EstudianteModule} from "./Estudiante/estudiante.module";
import {PersonaModule} from "./Persona/persona.module";
import {GeneralModule} from "./general/general.module";


const routes: Routes = [
  {path: "", loadChildren: () =>GeneralModule},
  {path: "estudiantes", loadChildren: () => EstudianteModule},
  {path: "personas", loadChildren: () => PersonaModule},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {paramsInheritanceStrategy: "always"})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
