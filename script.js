// Fun with Classes

// Let's declare parent class
class Animal{
    constructor(type){
        this.type = type;
    }
 //Declaring Method called intro
    intro(){
        console.log("This is",this.type);

    }
}
//Parent class has two children classes
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
//Parent class has two children classes
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
