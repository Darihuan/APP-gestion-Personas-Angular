import { Component, OnInit } from '@angular/core';
import {ConfirmarBorrarService} from "../aplication/confirmar-borrar.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirmacion-eliminar',
  templateUrl: './confirmacion-eliminar.component.html',
  styleUrls: ['./confirmacion-eliminar.component.scss']
})
export class ConfirmacionEliminarComponent implements OnInit {

  constructor(private  confirmarMatDialog:MatDialogRef<ConfirmarBorrarService>) { }

  ngOnInit(): void {
  }

  public cerrar(cerrar: boolean):void {
    this.confirmarMatDialog.close(cerrar)
  }
}
