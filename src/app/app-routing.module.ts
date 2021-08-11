import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { NuevaPersonaComponent } from './nueva-persona/nueva-persona.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {path:"",component:PrincipalComponent},
  {path: "crear", component: NuevaPersonaComponent},
  {path:"listar",component:ListarComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
