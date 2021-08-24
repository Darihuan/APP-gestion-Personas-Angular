import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EstudianteOutput} from "../../model/EstudianteOutput";
import {environment} from "../../../../environments/environment";


@Injectable({
  providedIn: 'root'
})

export class EstudiantesService {

  private readonly apiUrl: string = environment.api+"/estudiantes/";

  constructor(private httpClient: HttpClient) {
  }

  public saveEstudiante(estudiante: EstudianteOutput): Observable<EstudianteOutput> {
    return this.httpClient.post<EstudianteOutput>(this.apiUrl, estudiante);
  }

  public getEstudiantes(): Observable<EstudianteOutput[]> {
    return this.httpClient.get<EstudianteOutput[]>(this.apiUrl);
  }

  public deleteEstudiante(id: number): Observable<any> {
    return this.httpClient.delete(this.apiUrl + id);

  }

  public updateStudent(estudiante: EstudianteOutput): Observable<EstudianteOutput> {
    return this.httpClient.put<EstudianteOutput>(this.apiUrl + estudiante.id, estudiante);
  }
}



