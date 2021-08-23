import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonaDTO} from 'src/app/Persona/model/PersonaDTO';
import {PersonaOutput} from 'src/app/Persona/model/PersonaDTOOutput';
import {PersonaService} from 'src/app/Persona/aplication/persona.service';
import {AlertasService} from "../../../general/aplication/alertas/alertas.service";


@Component({
  selector: 'app-nueva-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.scss']
})
export class FormPersonaComponent implements OnInit {
  /*variables*/
  public personaActualizar: PersonaOutput;
  public personaForm: FormGroup;
  public crearPersona: boolean;


  constructor(private formBuilder: FormBuilder, private service: PersonaService, public router: Router,
              private rutaActiva: ActivatedRoute, private alertaService: AlertasService) {
    this.crearPersona = true;

  }

  ngOnInit(): void {
      this.cargarpersona(this.rutaActiva.snapshot.params.id);
    this.personaForm = this.iniciarForm();
  }


  /*metodos*/

  public submit(): void {

    let persona: PersonaOutput = this.personaForm.value;

    persona = this.imagenpordefecto(persona);

    this.service.crearPersona(persona).subscribe((personacreada) => {
      this.alertaService.crearAlerta(personacreada.id, "creado", "Persona");
      this.router.navigate(['personas/list']);
    },err=>console.error(err));

  }

  public update(): void {

    let persona: PersonaOutput = this.personaForm.value;
    persona = this.imagenpordefecto(persona);

    this.service.actualizar(persona).subscribe(actualizar => this.alertaService.crearAlerta(actualizar.id, "Actualizado", "Persona"),err=>console.error(err));
    this.router.navigate(['personas/list'])


  }

  public delete(persona: PersonaDTO): void {
    let id: number = persona.id;
    this.service.borrarPersona(persona.id).subscribe(persona => this.alertaService.crearAlerta(id, "borrado", "Persona"),err=>console.error(err))
      .add(() => this.router.navigate(['/list']))
      .unsubscribe();

  }

  public iniciarForm(): FormGroup {
    return this.personaForm = this.formBuilder.group({
      'id': [''],
      'user': [''],
      'password': [''],
      'surname': [''],
      'company_email': [''],
      'personal_email': [''],
      'city': [''],
      'imagen_url': [''],
      'active': [false],
      'created_Date': ['']
    });
  }

  public imagenpordefecto(comprobar: PersonaOutput): PersonaOutput {
    let devolver = comprobar;
    if (comprobar.imagen_url.length <= 1) {

      let random = Math.floor(Math.random() * 600 + 1);
      let url = `https://rickandmortyapi.com/api/character/avatar/${random}.jpeg`;

      devolver.imagen_url = url
    }
    return comprobar;

  }

  public cargarpersona(id: number): void {

    this.service.getPersonasById(this.rutaActiva.snapshot.params.id).subscribe(persona => {
      this.personaForm.patchValue(persona);
      this.crearPersona = !this.crearPersona;

    },err=>console.log("formulario en modo crear"));
  }


}
