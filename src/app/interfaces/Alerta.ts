export class Alerta{
    constructor(tipo:string,mensaje:string,id:number){
        this.tipo=tipo;
        this.mensaje=mensaje;
    }
    tipo:string;
    mensaje:string;
    id:number;
}