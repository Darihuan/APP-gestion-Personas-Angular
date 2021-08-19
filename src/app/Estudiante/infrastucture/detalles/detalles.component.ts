import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EstudianteOutput} from "../../model/EstudianteOutput";

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent  {
  public estudiante: EstudianteOutput;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private matdialogRef: MatDialogRef<DetallesComponent>) {
    this.estudiante = this.data;
  }



  public closeWindow():void{
    this.matdialogRef.close()
  }
}
