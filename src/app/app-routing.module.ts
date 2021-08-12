import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './components/Persona/listar/listar.component';
import { NuevaPersonaComponent } from './components/Persona/nueva-persona/nueva-persona.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  {path:"",component:PrincipalComponent},
  {path: "crear", component: NuevaPersonaComponent},
  {path: "actualizar", component: ListarComponent},
  {path:"listar",component:ListarComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
