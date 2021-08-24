import { Injectable } from '@angular/core';
import {MatDialog,MatDialogConfig} from "@angular/material/dialog";
import {CargaComponent} from "../infrasturcture/carga.component";

@Injectable({
  providedIn: 'root'
})
export class CargaService {

  constructor(private ventanaCarga:MatDialog) { }

  public abrirventanacarga():void{
    let configuracion =new MatDialogConfig();
    configuracion.width="auto";
    configuracion.autoFocus=true;
    this.ventanaCarga.open(CargaComponent,configuracion);
  }
  public cerrarventana():void{

    this.ventanaCarga.closeAll();
  }
}
