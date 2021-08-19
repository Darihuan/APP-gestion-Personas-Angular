import {PersonaOutput} from "./PersonaDTOOutput";

export interface EstudianteOutput extends PersonaOutput{
  num_hours_week:number;
  id_profesor:number;
  branch:string;
}
