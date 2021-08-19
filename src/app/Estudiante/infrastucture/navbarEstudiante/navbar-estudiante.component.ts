import {Component, EventEmitter, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FormularioComponent} from "../formulario/formulario.component";


@Component({
  selector: 'app-navbarEstudiante',
  templateUrl: './navbar-estudiante.component.html',
  styleUrls: ['./navbar-estudiante.component.scss']
})
export class NavbarEstudianteComponent {

  constructor(private dialog: MatDialog) {
  }

  public create(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "60%";
    this.dialog.open(FormularioComponent, dialogConfig)


  }

}
