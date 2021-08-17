import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Alerta} from 'src/app/interfaces/Alerta';
import {PersonaDTO} from 'src/app/interfaces/PersonaDTO';
import {PersonaOutput} from 'src/app/interfaces/PersonaDTOOutput';
import {PersonaService} from 'src/app/services/persona/persona.service';
import {AlertasService} from "../../../services/alertas/alertas.service";


@Component({
  selector: 'app-nueva-persona',
  templateUrl: './nueva-persona.component.html',
  styleUrls: ['./nueva-persona.component.scss']
})
export class NuevaPersonaComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private service: PersonaService, public router: Router,
              private rutaActiva: ActivatedRoute,private alertaService:AlertasService) {
  }

  ngOnInit(): void {

    this.cargarpersona(this.rutaActiva.snapshot.params.id);


  }

  /*variables*/
  personaActualizar: PersonaOutput;

  personaForm: FormGroup = this.formBuilder.group({
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
  condicion: boolean = true;


  /*metodos*/

  submit(): void {


    let persona: PersonaDTO = new PersonaDTO(null, this.personaForm.get('user').value, this.personaForm.get('password').value,
      this.personaForm.get('surname').value, this.personaForm.get('company_email').value, this.personaForm.get('personal_email').value,
      this.personaForm.get('city').value, this.personaForm.get('active').value, this.personaForm.get('created_Date').value, this.personaForm.get('imagen_url').value);

    persona = this.imagenpordefecto(persona);

    this.service.crearPersona(persona).subscribe((personacreada) =>{
      this.alertaService.crearAlertaSubmit(personacreada);
      this.router.navigate(['/']);});

  }

  update(): void {

    let persona = new PersonaDTO(this.personaActualizar.id, this.personaForm.get('user').value, this.personaForm.get('password').value,
      this.personaForm.get('surname').value, this.personaForm.get('company_email').value, this.personaForm.get('personal_email').value,
      this.personaForm.get('city').value, this.personaForm.get('active').value, this.personaForm.get('created_Date').value, this.personaForm.get('imagen_url').value);

      persona = this.imagenpordefecto(persona);

      this.service.actualizar(persona).subscribe(actualizar => this.alertaService.crearAlertaActualizar(actualizar));
      this.router.navigate(['/listar'])


  }

  borrarPersona(persona: PersonaDTO): void {
    this.service.borrarPersona(persona.id).subscribe(borrado => this.alertaService.crearAlertaBorrar(borrado))
      .add(() => this.router.navigate(['/listar']))
      .unsubscribe();

  }

  refrescar(): void {
    this.personaForm.patchValue({
      'user': [''],
      'password': [''],
      'surname': [''],
      'company_email': [''],
      'personal_email': [''],
      'city': [''],
      'active': [false],
      'created_Date': ['']
    })
  }

  imagenpordefecto(comprobar: PersonaDTO): PersonaDTO {
    if (comprobar.imagen_url.length <= 1) {
       let random = Math.floor(Math.random() * 600 + 1);
       let url = `https://rickandmortyapi.com/api/character/avatar/${random}.jpeg`;
        let devolver = comprobar;
           devolver.imagen_url = url

      return devolver;

    }
    return comprobar;

  }

  cargarpersona(id: number): void {
    console.log(id);
    this.service.getPersonasbyId(this.rutaActiva.snapshot.params.id).subscribe(persona => {
      this.personaActualizar = persona;
      this.setDatosForm();

    });
  }

  setDatosForm(): void {
    this.condicion = !this.condicion
    this.personaForm.get('user').setValue(this.personaActualizar.user);
    this.personaForm.get('password').setValue(this.personaActualizar.password);
    this.personaForm.get('surname').setValue(this.personaActualizar.surname);
    this.personaForm.get('company_email').setValue(this.personaActualizar.company_email);
    this.personaForm.get('personal_email').setValue(this.personaActualizar.personal_email);
    this.personaForm.get('city').setValue(this.personaActualizar.city);
    this.personaForm.get('active').setValue(this.personaActualizar.active);
    this.personaForm.get('created_Date').setValue(this.personaActualizar.created_Date);
    this.personaForm.get('imagen_url').setValue(this.personaActualizar.imagen_url);
  }


}
