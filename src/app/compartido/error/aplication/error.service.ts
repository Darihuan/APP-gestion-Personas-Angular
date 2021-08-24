import { Injectable } from '@angular/core';
import {MatDialog,MatDialogConfig} from "@angular/material/dialog";
import {ErrorComponent} from "../infrastructure/error.component";
import {config} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private dialog:MatDialog) { }

  public lanzarerror(error:Error){
    let configuracion = new MatDialogConfig();
    configuracion.autoFocus = true;
    configuracion.width = "auto";
    configuracion.data=error;

    this.dialog.open(ErrorComponent,configuracion).afterClosed().subscribe();
  }


}
