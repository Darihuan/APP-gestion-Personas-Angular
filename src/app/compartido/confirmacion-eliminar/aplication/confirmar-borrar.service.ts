import {Injectable} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";


@Injectable(
  {
    providedIn: "root"
  }
)
export class ConfirmarBorrarService {
  constructor(public confirmardialog: MatDialog) {
  }

  public cerrar(valor: boolean) {
    this.confirmardialog.closeAll();
    return valor;
  }


}
