export class Actor {
    id:number;
    nombre:string;
    apellido:string;
    sexo:string;
    fecha_de_nacimiento:string;
    foto:string;
    pais_origen:string;

    constructor(id:number, nombre:string,apellido:string, sexo:string,fecha_de_nacimiento:string,foto:string,pais:string){
        this.id=id;
        this.nombre=nombre;
        this.apellido = apellido;
        this.sexo= sexo;
        this.fecha_de_nacimiento = fecha_de_nacimiento;
        this.foto = foto;
        this.pais_origen= pais;
    }
}
