import { NgModule } from '@angular/core';
import {MaterialesModule} from "./materiales.module";
import {CargaComponent} from "./carga/infrasturcture/carga.component";
import {ConfirmacionEliminarComponent} from "./confirmacion-eliminar/infrastructure/confirmacion-eliminar.component";
import {ErrorComponent} from "./error/infrastructure/error.component";



@NgModule({
  declarations: [
  CargaComponent,
    ConfirmacionEliminarComponent,
    ErrorComponent
  ],
  imports: [
    MaterialesModule
  ]
})
export class CompartidosModule { }
