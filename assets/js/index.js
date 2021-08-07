"use strict";
import {Animal, Lion, Wolf, Bear, Snake, Eagle} from "./animal.js"

(async () => {
    const Response = await fetch("/animales.json");
    const { animales: Animales } = await Response.json();
    
    const animal_type = document.getElementById('animal')
    const animal_age = document.getElementById('edad')
    const animal_comment = document.getElementById('comentarios')
    const animal_register = document.getElementById("btnRegistrar")
    const animal_preview = document.getElementById('preview')
    let animal_img;
    animal_type.addEventListener("change", () => {
        
        switch (animal_type.value){
            case "Leon": 
                animal_img = "assets/imgs/Leon.png"
            break;
            case "Lobo": 
                animal_img = "assets/imgs/Lobo.jpg"
            break;
            case "Oso": 
                animal_img = "assets/imgs/Oso.jpg"
            break;
            case "Serpiente": 
                animal_img = "assets/imgs/Serpiente.jpg"
            break;
            case "Aguila": 
                animal_img = "assets/imgs/Aguila.png"
            break;
        }
        animal_preview.setAttribute('style', `background-image: url(${animal_img})`)
        return animal_img; 
    })
    animal_register.addEventListener("click", () => {
        if (animal_type.value == "Seleccione un animal" || animal_age.value == "Seleccione un rango de años" || animal_comment.value == ""){
            alert('Debes ingresar datos en todos los campos del registro para agregar un animal')
        }else{
            Animal.Name = animal_type.value
            Animal.Age = animal_age.value
            Animal.Img = animal_img
            Animal.Comment = animal_comment.value
            switch (Animal.Name) {
                case "Leon": 
                    const lion = new Lion(Animal.Name, Animal.Age, Animal.Img, Animal.Comment);
                //    lion.Roar()   
                    createCard(lion);
                    createModal(lion); 
                break;
                case "Lobo": 
                    const wolf = new Wolf(Animal.Name, Animal.Age, Animal.Img, Animal.Comment);
                //    wolf.Howl()  
                    createCard(wolf);
                    createModal(wolf); 
                break;
                case "Oso": 
                    const bear = new Bear(Animal.Name, Animal.Age, Animal.Img, Animal.Comment);
                    createCard(bear);
                    createModal(bear); 
                //    bear.Snarl()  
                break;
                case "Serpiente": 
                    const snake = new Snake(Animal.Name, Animal.Age, Animal.Img, Animal.Comment);
                    createCard(snake);
                    createModal(snake);
                //    snake.Hiss()  
                break;
                case "Aguila": 
                    const eagle = new Eagle(Animal.Name, Animal.Age, Animal.Img, Animal.Comment);
                //    eagle.Screech()  
                    createCard(eagle);
                    createModal(eagle); 
                break;
            }
            clearFields()
        }        
    });
    function clearFields(){
        console.log('limpieza');
        document.getElementById('animal').value = "Seleccione un animal"
        document.getElementById('edad').value = "Seleccione un rango de años"
        document.getElementById('comentarios').value = ""
        animal_preview.setAttribute('style', `background-image: url(assets/imgs/lion.svg)`) 
    }
    function createCard(){
        let animalCard = document.getElementById('Animales')
        animalCard.innerHTML += `<div class="mx-auto float-start" style="width:180px;height:280px;">
                                    <button type="button" data-toggle="modal" data-target="#exampleModal">
                                        <img src=${Animal.Img} class="" style="width:180px;height:200px;object-fit:cover;">
                                    </button>
                                    <a href="#"><div class="card-footer">
                                        <img src="assets/imgs/audio.svg" style="width:40px;height:40px"></div>
                                    </a>
                                </div>`                                                                
    }
    function createModal(){
        let animalModal = document.querySelector("#exampleModal .modal-body");
        animalModal.innerHTML += `<p>${Animal.Name}</p>`
        console.log(animalModal.innerHTML)                                                                
    }
    
})();   