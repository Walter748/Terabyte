interface lista {
    completada:Boolean[];
    id:number[];
}
class traeas implements lista {
    completada: Boolean[];
    id: number[];
    private listaTareas:string[]
    constructor(){
        this.listaTareas = [];
        this.completada=[];
        this.id=[];
    }
    Agregar(tarea:string,ids:number): void{
        this.listaTareas.push(tarea);
        this.id.push(ids);
        this.completada.push(false);
    }
}
