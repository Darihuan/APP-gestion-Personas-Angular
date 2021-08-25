import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ErrorService} from "../aplication/error.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private ventanaDialogo:MatDialogRef<ErrorService>,@Inject(MAT_DIALOG_DATA)public data:Error) {
  }

  ngOnInit(): void {
  }


  cerrar() {
    this.ventanaDialogo.close()
  }
}
