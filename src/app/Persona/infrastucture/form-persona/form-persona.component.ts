import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonaDTO} from 'src/app/Persona/model/PersonaDTO';
import {PersonaOutput} from 'src/app/Persona/model/PersonaDTOOutput';
import {PersonaService} from 'src/app/Persona/aplication/services/persona.service';
import {AlertasService} from "../../../general/aplication/services/alertas.service";
import {ConfirmarBorrarService} from "../../../compartido/confirmacion-eliminar/aplication/confirmar-borrar.service";
import {ConfirmacionEliminarComponent} from "../../../compartido/confirmacion-eliminar/infrastructure/confirmacion-eliminar.component";


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
              private rutaActiva: ActivatedRoute, private alertaService: AlertasService,
              private borrarDialog: ConfirmarBorrarService) {
    this.crearPersona = true;

  }

  ngOnInit(): void {
    this.personaForm = this.iniciarForm();
    if (this.rutaActiva.snapshot.data.persona != undefined)
      this.cargarPersonaActualizar();
  }


  /*metodos*/

  public submit(): void {

    let persona: PersonaOutput = this.personaForm.value;

    persona = this.imagenpordefecto(persona);

    this.service.crearPersona(persona).subscribe((personacreada) => {
      this.alertaService.crearAlerta(personacreada.id, "creado", "Persona");
      this.router.navigate(['personas/list']);
    }, err => console.error(err));

  }

  public update(): void {

    let persona: PersonaOutput = this.personaForm.value;
    persona = this.imagenpordefecto(persona);

    this.service.actualizar(persona).subscribe(actualizar => this.alertaService.crearAlerta(actualizar.id, "Actualizado", "Persona"), err => console.error(err));
    this.router.navigate(['personas/list'])


  }

  public delete(): void {
    let id: number = this.personaForm.value.id;
    this.borrarDialog.confirmardialog.open(ConfirmacionEliminarComponent).afterClosed().subscribe(
      confimar => {
        if (confimar) {
          this.service.borrarPersona(id).subscribe(() => {
            this.alertaService.crearAlerta(id, "borrado", "Persona");
            this.router.navigate(['personas/list']);
          })

        }
      }
    )


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


  private cargarPersonaActualizar() {

    this.crearPersona = !this.crearPersona;
    this.personaForm.patchValue(this.rutaActiva.snapshot.data.persona);
  }
}
