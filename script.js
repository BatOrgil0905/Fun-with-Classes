// Fun with Classes

class Animal{
    constructor(type){
        this.type = type;
    }
    intro(){
        console.log("This is",this.type);

    }
}
class Carnivore extends Animal{
    constructor(type,eat){
        super(type);
        this.eat = eat;
    }
    intro(){
        super.intro();
        console.log(this.type,"eats",this.eat);
    }
}
class Herbivore extends Animal{
    constructor(type,eat){
        super(type);
        this.eat = eat;
    }
    intro(){
        super.intro();
        console.log(this.type,"eats",this.eat);
    }
}

let carnivore = new Carnivore("Lion", "meat");
let herbivore = new Herbivore("Deer", "leaves")

carnivore.intro();
herbivore.intro();
