import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { PersonaOutput } from '../interfaces/PersonaDTOOutput';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private service:ApiServiceService) { }
  personas:PersonaOutput[];
  ngOnInit(): void { 
    this.service.getPersonas().then(respuesta=>this.personas=respuesta);

  }
  
  




}
