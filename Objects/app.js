console.log("hello");


// const students = [
// { name: "Aman", age: 20 },
// { name: "Sara", age: 22 },
// { name: "Ravi", age: 19 },
// { name: "Nisha", age: 21 },
// { name: "Kunal", age: 23 },
// { name: "Meera", age: 20 },
// { name: "Sahil", age: 18 },
// { name: "Tina", age: 22 },
// { name: "Arjun", age: 19 },
// { name: "Kavya", age: 21 }
// ];

// const studentsList = document.querySelector(".studentList")

// for (let i = 0 ; i < students.length ; i++){
//     let studentsName = students[i].name
//     console.log(studentsName);
//     studentsList.innerHTML +=  studentsName + " , "
// }





// const products = [

// { title: "Laptop", price: 45000 },
// { title: "Mouse", price: 800 },
// { title: "Keyboard", price: 1200 },
// { title: "Monitor", price: 9000 },
// { title: "USB Cable", price: 300 },
// { title: "Headphones", price: 1500 },
// { title: "Charger", price: 700 },
// { title: "Webcam", price: 2500 },
// { title: "Mic", price: 2800 },
// { title: "Speaker", price: 3200 }
// ];

// let totalprice = 0;
// for (let i = 0 ; i < products.length ; i++){
//     totalprice += products[i].price
// }
// console.log(totalprice);





 
// const employees = [
// { name: "John", salary: 55000 },
// { name: "Maya", salary: 48000 },
// { name: "Karan", salary: 65000 },
// { name: "Reena", salary: 70000 },
// { name: "Dev", salary: 52000 },
// { name: "Hina", salary: 45000 },
// { name: "Vishal", salary: 75000 },
// { name: "Rita", salary: 35000 },
// { name: "Amit", salary: 90000 },
// { name: "Sunil", salary: 60000 }
// ];
// const salaries = document.querySelector(".salary")
 

// for (let i = 0 ; i < employees.length; i++){
//     if (employees[i].salary >=  50000){
//         console.log(employees[i].name , employees[i].salary);
//         salaries.innerHTML += `${employees[i].name} ${employees[i].salary} ,  `
//     }
// }




// const books = [
// { title: "Book A", category: "fiction" },
// { title: "Book B", category: "science" },
// { title: "Book C", category: "fiction" },
// { title: "Book D", category: "history" },
// { title: "Book E", category: "fiction" },
// { title: "Book F", category: "math" },
// { title: "Book G", category: "fiction" },
// { title: "Book H", category: "science" },
// { title: "Book I", category: "fiction" },
// { title: "Book J", category: "novel" }
// ];
// const booksLength = document.querySelector(".booksLength")

// for(let i = 0 ; i < books.length ; i++){
   
//     if(books[i].category === "fiction"){
//         console.log(books[i].title);
//      booksLength.innerHTML = books[i].title.length
        
//     }
// }

// console.log(booksLength.innerHTML);



// const users = [
// { name: "Ali", email: "ali@gmail.com" },
// { name: "Rita", email: "rita@gmail.com" },
// { name: "Dev", email: "dev@yahoo.com" },
// { name: "Meera", email: "meera@gmail.com" },
// { name: "Raj", email: "raj@outlook.com" },
// { name: "Tina", email: "tina@gmail.com" },
// { name: "Karan", email: "karan@gmail.com" },
// { name: "Simran", email: "simran@yahoo.com" },
// { name: "Pooja", email: "pooja@gmail.com" },
// { name: "Vikas", email: "vikas@gmail.com" }
// ];
// const usersEmail = document.querySelector(".usersEmail")
// const allemails = [];

// for (let i = 0 ; i < users.length ; i++){
// console.log(users[i]);
// allemails.push (users[i].email)
// usersEmail.innerHTML = allemails 
// }

// console.log(allemails);





// const orders = [
// { id: 1, amount: 1500 },
// { id: 2, amount: 700 },
// { id: 3, amount: 2300 },
// { id: 4, amount: 5000 },
// { id: 5, amount: 3400 },
// { id: 6, amount: 280 },
// { id: 7, amount: 1200 },
// { id: 8, amount: 15000 },
// { id: 9, amount: 2500 },
// { id: 10, amount: 900 }
// ]

// let heigest = 0

// for (let i = 0 ; i < orders.length ; i++){
// if (heigest < orders[i].amount){
//     heigest = orders[i].amount
    
// }
//     }
// console.log(heigest);


// const cars = [
// { brand: "BMW", year: 2018 },
// { brand: "Toyota", year: 2012 },
// { brand: "Audi", year: 2020 },
// { brand: "Honda", year: 2016 },
// { brand: "Ford", year: 2014 },
// { brand: "Kia", year: 2019 },
// { brand: "Tesla", year: 2021 },
// { brand: "Hyundai", year: 2017 },
// { brand: "Jeep", year: 2013 },
// { brand: "Volvo", year: 2022 }
// ];
// const Cars = document.querySelector(".Cars")
// // let brands = [];

// for (let i = 0 ; i < cars.length ; i++){
// if( cars[i].year >= 2015){
//     console.log(cars[i].brand , cars[i].year)
//     Cars.innerHTML += `${cars[i].brand}   ${cars[i].year}  , ` 
// }

// }
   
    


// const movies = [
// { name: "Inception", rating: 9 },
// { name: "Hero", rating: 6 },
// { name: "Interstellar", rating: 8.5 },
// { name: "Dune", rating: 8.2 },
// { name: "Avatar", rating: 7 },
// { name: "Joker", rating: 8.4 },
// { name: "Gravity", rating: 7.8 },
// { name: "Tenet", rating: 7.5 },
// { name: "Soul", rating: 8.3 },
// { name: "Wall-E", rating: 8.4 }
// ];
// const Movies = document.querySelector(".Movies")
// let moviesList = 0
// for (let i = 0 ; i < movies.length ; i++){
//     if(movies[i].rating > 8 ){      
//         moviesList += `${movies[i].name}"${movies[i].rating}" ,  `
//     console.log(movies[i].name , movies[i].rating);       
//     Movies.innerHTML =  moviesList   
//     }
// }
// console.log(moviesList);


// const players = [
// { name: "Rohit", score: 50 },
// { name: "Virat", score: 80 },
// { name: "Dhoni", score: 70 },
// { name: "Hardik", score: 60 },
// { name: "Gill", score: 55 },
// { name: "Surya", score: 75 },
// { name: "Iyer", score: 65 },
// { name: "Pant", score: 58 },
// { name: "Rahul", score: 72 },
// { name: "Bumrah", score: 40 }
// ];
// let total = 0
// let average = 0 
// for (let i = 0 ; i < players.length ; i++){
//     total += players[i].score
//     average = total / players.length
// }
// console.log(total);
// console.log(average);




// const tasks = [
// { task: "Cleaning", completed: true },
// { task: "Shopping", completed: false },
// { task: "Coding", completed: true },
// { task: "Reading", completed: true },
// { task: "Gym", completed: false },
// { task: "Cooking", completed: true },
// { task: "Study", completed: false },
// { task: "Laundry", completed: true },
// { task: "Meditation", completed: false },
// { task: "Running", completed: true }
// ];
// console.log(tasks.length);

// let totalTasks = 0;
// for (let i = 0 ; i < tasks.length ; i++){
// if(tasks[i].completed === true){
// console.log(tasks[i].task);
// totalTasks = tasks[i].task.length
// console.log();

// }
// }
// console.log(totalTasks);





// const cities = [
// { name: "Delhi", population: 19000000 },
// { name: "Pune", population: 3100000 },
// { name: "Jaipur", population: 4000000 },
// { name: "Indore", population: 2200000 },
// { name: "Nagpur", population: 2400000 },
// { name: "Surat", population: 6000000 },
// { name: "Kanpur", population: 3000000 },
// { name: "Lucknow", population: 3500000 },
// { name: "Patna", population: 2500000 },
// { name: "Bhopal", population: 2000000 }
// ];


// const smallestList = document.querySelector(".Cities") 
// let smallest = cities[0].population ;
// for (let i = 0 ; i < cities.length ; i++){
//     if (cities[i].population < smallest){
//         smallest = cities[i].population 
//         smallestList.innerHTML = smallest
//     }
// }

// console.log(smallest);




// const items = [
// { item: "Pen", quantity: 20, price: 10 },
// { item: "Notebook", quantity: 5, price: 50 },
// { item: "Bag", quantity: 2, price: 300 },
// { item: "Bottle", quantity: 10, price: 40 },
// { item: "Pencil", quantity: 30, price: 5 },
// { item: "Marker", quantity: 15, price: 15 },
// { item: "Eraser", quantity: 25, price: 3 },
// { item: "Sharpener", quantity: 18, price: 6 },
// { item: "Calculator", quantity: 4, price: 200 },
// { item: "File", quantity: 12, price: 20 }
// ];

// const inventory = document.querySelector(".inventory");

// let totalItmes = 0 ;
// let totalQuantity = 0 ;
// let totalprice = 0 ;


// for (let i = 0 ; i < items.length ; i++){
//     totalItmes = items.length ;
//     totalQuantity += items[i].quantity ;
//     totalprice += items[i].price ;
//     inventory.innerHTML = `totalItems is ${totalItmes}  , totalQuantity is ${totalQuantity} , totalPrice is  ${totalprice}`

// }
// console.log(totalItmes);
// console.log(totalQuantity);
// console.log(totalprice);








// const studentsData = [
// { name: "Arun", age: 17 },
// { name: "Priya", age: 21 },
// { name: "Neha", age: 25 },
// { name: "Suresh", age: 19 },
// { name: "Tara", age: 23 },
// { name: "Kiran", age: 26 },
// { name: "Nitin", age: 22 },
// { name: "Monika", age: 24 },
// { name: "Vivek", age: 18 },
// { name: "Harsh", age: 27 }
// ];
// const student = document.querySelector(".student")

// let studentList = 0 ;

// for (let i = 0 ; i < studentsData.length ; i++){
//     if (studentsData[i].age >= 18 && studentsData[i].age <= 25 ){
//         console.log(studentsData[i].name ,  studentsData[i].age);
//         student.innerHTML += `${studentsData[i].name}   "${studentsData[i].age}",  `
//     }
// }






// const transactions = [
// { type: "credit", amount: 2000 },
// { type: "debit", amount: 500 },
// { type: "credit", amount: 1500 },
// { type: "credit", amount: 4500 },
// { type: "debit", amount: 800 },
// { type: "credit", amount: 700 },
// { type: "credit", amount: 3200 },
// { type: "debit", amount: 400 },
// { type: "credit", amount: 2500 },
// { type: "debit", amount: 600 }
// ];
//  const allcredits = document.querySelector(".credit")   
//  let total = 0 ;
//  let totalAmount = 0 ;
// for(let i = 0 ; i < transactions.length ; i++){
       
//     if (transactions[i].type === "credit") {
//         console.log(transactions[i].type  , transactions[i].amount);
//         total = transactions[i].type.length 
//         totalAmount += transactions[i].amount       
//         allcredits.innerHTML = `("Number of Credits" = "${total}" ;
        
//         "total Amount = ${totalAmount}")`
//     }
    
// }
// console.log(total);
// console.log(totalAmount);






const courses = [
{ title: "Math" },
{ title: "Computer Science" },
{ title: "Web Development" },
{ title: "Electrical Engineering" },
{ title: "Data Structures" },
{ title: "Artificial Intelligence" },
{ title: "Machine Learning" },
{ title: "Cloud Computing" },
{ title: "Cyber Security" },
{ title: "Human Computer Interaction" }
];
const coursetitle = document.querySelector(".coursetitle")
let index = 0
let highest = 0;
for (let i = 0 ; i < courses.length ; i++){
    if (highest < courses[i].title.length){
       highest = courses[i].title.length
        index = i
        coursetitle.innerHTML = `${highest}  , ${index} , ${courses[index].title}`
    }

}
console.log(highest , );
console.log(index , courses[index].title);
