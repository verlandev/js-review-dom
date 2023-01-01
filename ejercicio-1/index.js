// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let myUl$$ = document.createElement("ul");
console.log(myUl$$);

for (i = 0; i < countries.length; i++){

    let myLiElements$$ = document.createElement("li");
    myLiElements$$.textContent = countries[i];
    console.log(myLiElements$$);
    myUl$$.appendChild(myLiElements$$)  
    
}
document.body.appendChild(myUl$$)




// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let removalElement = document.querySelector('.fn-remove-me');
removalElement.remove();

// !Ojo que si me diera por coger todos los elementos de esa clase con .querySelectorAll, el sistema detecta que tengo que realizar un bucle para recorrerlos todos y poder eliminarlos.



// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let carList$$ = document.querySelector('[data-function="printHere"]');

let ulCars$$ = document.createElement('ul');

for (i = 0; i < cars.length; i++){
    
    let carLiElement$$ = document.createElement('li');
    carLiElement$$.textContent = cars[i];
    ulCars$$.appendChild(carLiElement$$)
}

console.log(ulCars$$);

carList$$.appendChild(ulCars$$);




// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.

const places = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];



for (const place of places) {

    let eachDiv$$ = document.createElement('div');
    
    eachDiv$$.innerHTML = `<h4>${place.title}</h4><img src=${place.imgUrl} />`; // ojo que no son comillas simples sino un accent grave en francés.

    document.body.appendChild(eachDiv$$); // quizás esto se pueda usar para la pokeapi.
}



// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.

let buttonRemove$$ = document.createElement('button');
document.body.appendChild(buttonRemove$$);
buttonRemove$$.textContent = "Pínchame que borro cosas";

// NO LO PUEDO HACER PORQUE TODAVÍA NO HAN EXPLICADO LOS EVENTOS


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.


