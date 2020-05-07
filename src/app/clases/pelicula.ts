export class Pelicula {
    id:number;
    nombre:string;
    tipo:Tipo;
    fecha_de_estreno:string;
    cantidad_de_publico:number;
    foto:string;
    actor:string;
}

enum Tipo{
    terror,
    comedia,
    amor,
    otros
}

