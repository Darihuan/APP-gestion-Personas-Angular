import {MaterialesModule} from "../compartido/materiales.module";
import {PrincipalComponent} from "./infrastructure/principal/principal.component";
import {NavbarComponent} from "./infrastructure/navbar/navbar.component";
import {SidebarComponent} from "./infrastructure/sidebar/sidebar.component";
import {AlertCardComponent} from "./infrastructure/alert-card/alert-card.component";
import {GeneralRoutingModule} from "./general-routing.module";
import {NgModule} from "@angular/core";


@NgModule({
  declarations: [
    PrincipalComponent,
    NavbarComponent,
    SidebarComponent,
    AlertCardComponent
  ],
  exports: [
    PrincipalComponent,
    NavbarComponent,
    SidebarComponent,
    AlertCardComponent
  ],
  imports: [

    GeneralRoutingModule,
    MaterialesModule


  ]
})
export class GeneralModule {
}
