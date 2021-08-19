import {PersonaOutput} from "../../Persona/model/PersonaDTOOutput";

export interface EstudianteOutput extends PersonaOutput {
  num_hours_week: number;
  id_profesor: number;
  branch: string;
}
