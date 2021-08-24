import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrincipalComponent} from "../general/infrastructure/principal/principal.component";
import {NavbarComponent} from "./infrastructure/navbar/navbar.component";

const generalRoutes: Routes = [
  {path: "", component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(generalRoutes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule{
}
