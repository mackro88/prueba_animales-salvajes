"use strict";
export class Animal {
    
    #animal_name; 
    #age; 
    #img; 
    #comment; 
    #sound;
    
    constructor (animal_name, age, img, comment, sound){
        this.#animal_name = animal_name;
        this.#age = age; 
        this.#img = img; 
        this.#comment = comment; 
        this.#sound = sound;
    }
    
    get Name(){
        return this.#animal_name
    }
    get Age(){
        return this.#age
    }
    get Img(){
        return this.#img
    }
    get Comment(){
        return this.#comment
    }
    set Comment(new_comment){
        this.#comment = new_comment
    }
    get Sound(){
        return this.#sound
    }
    soundPlay() {
        const player = document.getElementById("player");
        player.load();
        player.play();
      }
}

export class Lion extends Animal{
    Roar(){
        this.soundPlay(new Audio('assets/sounds/Rugido.mp3'))
    }
}
export class Wolf extends Animal{
    Howl(){
        const howl = new Audio('assets/sounds/Aullido.mp3')
        howl.play()
    }
}
export class Bear extends Animal{
    Snarl(){
        const snarl = new Audio('assets/sounds/Gruñido.mp3')
        snarl.play()
    }
}
export class Snake extends Animal{
    Hiss(){
        const hiss = new Audio('assets/sounds/Siseo.mp3')
        hiss.play()
    }
}
export class Eagle extends Animal{
    Screech(){
        const screech = new Audio('assets/sounds/Chillido.mp3')
        screech.play()
    }
}


