// get elelemts by tag name

//1
// let myBody = document.getElementsByTagName('body')[0]
// let myBody = document.body
// console.log(myBody);

// //2
// let firstElementBody = myBody.firstElementChild
// console.log(firstElementBody);

// //3
// let lastElementBody = myBody.lastElementChild
// console.log(lastElementBody);

// //4
// let myDiv = document.getElementsByTagName('div')[0]
// let exo4 = myDiv.children 
// console.log(exo4);

// //5
// let firstLi = document.getElementsByTagName('li')[0]
// let suivant = firstLi.nextElementSibling
// console.log(suivant);

// //6
// let precendant = suivant.previousElementSibling
// console.log(precendant);


// ### 1. Stock la balise body dans une variable du nom de "myBody"
let mybody = document.getElementsByTagName('body')[0]
console.log(mybody);

// ### 2. Trouve une méthode pour récuperer le premier élément de "myBody" et affiche le dans un console.log
let firstElementBody = mybody.firstElementChild
console.log(firstElementBody);

// ### 3. Trouve une méthode pour récuperer le dernièr élément de "myBody" et affiche le dans un console.log
let lastElementBody = mybody.lastElementChild
console.log(lastElementBody);

// ### 4. Trouve une méthode pour récuperer tous les enfants de la premiere div puis stock dans une variable "exo4" et affiche la dans un console.log
let firstDiv = document.getElementsByTagName ('div')[0]
let exo4 = firstDiv.children
console.log(exo4);

// ### 5. Récupère le premier li, puis trouve une méthode JS pour afficher l'élément suivant( c'est a dire le second li ) et affiche le résultat dans un CL
let firstLi = document.getElementsByTagName('li')[0]
let secondLi = firstLi.nextElementSibling
console.log(secondLi);

// ### 6. Récupère le second élément puis trouve une méthode JS pour afficher l'élément précédant( c'est a dire le premier li ) et affiche le résultat dans un CL
let precedant = secondLi.previousElementSibling
console.log(precedant);