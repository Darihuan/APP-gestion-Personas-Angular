import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public service:PersonaService) { }
  condicion;
  ngOnInit(): void {
  }

}
