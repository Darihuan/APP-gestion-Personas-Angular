import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './components/Persona/listar/listar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import {NuevaPersonaComponent} from "./components/Persona/nueva-persona/nueva-persona.component";

const routes: Routes = [
  {path:"",component:PrincipalComponent},
  {path: "crear", component: NuevaPersonaComponent},
  {path: "actualizar/:id", component: NuevaPersonaComponent},
  {path:"listar",component:ListarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
