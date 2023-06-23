class Animal {
    sonido
    constructor(sonido:string){
        this.sonido= sonido
    }
    
    hacersonido(){
        return console.log(this.sonido)
    }
}
class Gato extends Animal{
    
    }
class Perro extends Animal{

}
