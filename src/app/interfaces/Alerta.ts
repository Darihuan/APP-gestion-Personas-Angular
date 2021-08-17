export class Alerta{
    constructor(tipo:string,mensaje:string,id:number){
        this.tipo=tipo;
        this.mensaje=mensaje;
        this.id=id;
    }
    tipo:string;
    mensaje:string;
    id:number;
}
