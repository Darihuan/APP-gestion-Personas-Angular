import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { NuevaPersonaComponent } from './Persona/nueva-persona/nueva-persona.component';
import { PrincipalComponent } from './principal/principal.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {path:"",component:PrincipalComponent},
  {path: "crear", component: NuevaPersonaComponent},
  {path: "actualizar", component: ListarComponent},
  {path:"listar",component:ListarComponent},
  {path:"barra",component:SidenavComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
