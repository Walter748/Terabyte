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
let gato1= new Gato("miau")
let perro1= new Perro ("Guau")
gato1.hacersonido()
perro1.hacersonido()