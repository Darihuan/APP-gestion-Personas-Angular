import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-principalEstudiante',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalEstudianteComponent  {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() {
  }


}
