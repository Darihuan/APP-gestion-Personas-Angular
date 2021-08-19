export class Alerta {
  constructor(tipo: string, mensaje: string, id: number, tipoPersona: string) {
    this.tipo = tipo;
    this.mensaje = mensaje;
    this.id = id;
    this.tipoPersona = tipoPersona;
  }

  tipo: string;
  mensaje: string;
  id: number;
  tipoPersona: string;
}
