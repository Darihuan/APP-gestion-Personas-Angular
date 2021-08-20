import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-principal-persona',
  templateUrl: './principal-persona.component.html',
  styleUrls: ['./principal-persona.component.scss']
})
export class PrincipalPersonaComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() {
  }

  ngOnInit(): void {
  }

}
