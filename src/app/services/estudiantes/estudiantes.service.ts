import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EstudianteOutput} from "../../interfaces/EstudianteOutput";


@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  private readonly apiurl: string = "http://localhost:3000/estudiantes/";

  constructor(private httpclient: HttpClient) {
  }

  public saveEstudiante(estudiante: EstudianteOutput): Observable<EstudianteOutput> {

    return this.httpclient.post<EstudianteOutput>(this.apiurl, estudiante);

  }

  getEstudiantes():Observable<EstudianteOutput[]> {
    return this.httpclient.get<EstudianteOutput[]>(this.apiurl);
  }

  deleteEstudiante(id:number):Observable<any> {
    return this.httpclient.delete(this.apiurl+id);

  }
}



