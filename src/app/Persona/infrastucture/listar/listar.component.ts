import {Component, Input, OnInit} from '@angular/core';

import {PersonaOutput} from '../../model/PersonaDTOOutput';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonaService} from 'src/app/Persona/aplication/services/persona.service';
import {PersonaDTO} from 'src/app/Persona/model/PersonaDTO';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  /*variables*/
  public personas: PersonaOutput[];

  constructor(private service: PersonaService, public router: Router,private rutaActiva:ActivatedRoute) {
    this.personas = [];
  }

  ngOnInit(): void {
    this.getPersonas();
  }


  /*metodos*/

  public recibirmensajePersona($event: PersonaDTO): void {
    let arraytemporal = this.personas.filter(elemento => elemento != $event)
    this.personas = arraytemporal;
  }

  private getPersonas(): void {
    this.personas=this.rutaActiva.snapshot.data.personas;
  }


}
