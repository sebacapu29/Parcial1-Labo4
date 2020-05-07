export class Actor {
    id:number;
    nombre:string;
    apellido:string;
    sexo:string;
    fecha_de_nacimiento:string;
    foto:string;

    constructor(id:number, nombre:string,apellido:string, sexo:string,fecha_de_nacimiento:string,foto:string){
        this.id=id;
        this.nombre=nombre;
        this.apellido = apellido;
        this.sexo= sexo;
        this.fecha_de_nacimiento = fecha_de_nacimiento;
        this.foto = foto;
    }
}
