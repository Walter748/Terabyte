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
let gato1= new Gato("miau")
class Perro extends Animal{

}
gato1.hacersonido()