import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EstudiantesService} from "../../aplication/services/estudiantes.service";
import {EstudianteOutput} from "../../model/EstudianteOutput";
import {MatDialogRef} from "@angular/material/dialog";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AlertasService} from "../../../general/aplication/services/alertas.service";
import {ServicioDatosService} from "../../aplication/services/servicio-datos.service";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public miformulario: FormGroup;
  public actualizar: boolean = false;

  constructor(private formBuilder: FormBuilder, private estudianteService: EstudiantesService,
              private formRef: MatDialogRef<FormularioComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private alertService: AlertasService, private dataService: ServicioDatosService) {

  }

  ngOnInit(): void {
    this.miformulario = this.iniciarFormulario();
    if (this.data != undefined) {
      this.cargardatos(this.data);
      this.actualizar = true;
    }
  }

  public createStudent(): void {
    if (this.miformulario.valid) {
      let estudiate: EstudianteOutput = this.miformulario.value;
      estudiate = this.imagenpordefecto(estudiate);

      this.estudianteService.saveEstudiante(estudiate).subscribe((creado) => {
        this.formRef.close();
        this.dataService.datosactualizados()
        this.alertService.crearAlerta(creado.id, "creado", "Estudiante");

      });
    }

  }

  public iniciarFormulario(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      user: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15),
        Validators.pattern("(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,10})$")]),
      name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      surname: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      company_email: new FormControl('', [Validators.required, Validators.minLength(7),Validators.pattern("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")]),
      personal_email: new FormControl('', [Validators.required, Validators.minLength(7),Validators.pattern("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")]),
      city: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      active: new FormControl(false),
      imagen_url: new FormControl(''),
      created_date: new FormControl('', [Validators.required]),
      num_hours_week: new FormControl('', [Validators.required]),
      id_profesor: new FormControl('', [Validators.required]),
      branch: new FormControl('', [Validators.required]),
    });
  }

  cargardatos(data: EstudianteOutput) {
    this.miformulario.patchValue(data)

  }

  updateStudent() {
    let estudiate: EstudianteOutput = this.miformulario.value;
    estudiate = this.imagenpordefecto(estudiate);

    this.estudianteService.updateStudent(estudiate).subscribe((actualizado) => {
      this.formRef.close();
      this.dataService.datosactualizados()
      this.alertService.crearAlerta(actualizado.id, "actualizado", "Estudiante");
    }, (err) => {
      console.error(err);
    })
  }

  public imagenpordefecto(comprobar: EstudianteOutput): EstudianteOutput {
    let devolver: EstudianteOutput = comprobar;
    if (comprobar.imagen_url.length <= 1) {

      let random = Math.floor(Math.random() * 600 + 1);
      let url = `https://rickandmortyapi.com/api/character/avatar/${random}.jpeg`;


      devolver.imagen_url = url


    }
    return devolver;

  }
}
