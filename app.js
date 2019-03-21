//Write a for loop that will log the numbers 1 through 20.

// for(i=0;i<20;i++){
//     console.log(i);
// }

//Write a for loop that will log only the even numbers in 0 through 200.
// for(i=1;i<200;i++){
//     if(i %2 === 0){
//         console.log(i)
//     }
// }


//Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// for(i=0;i<20;i++){
//      console.log("Love me, pet me ! HSSSSSSS!");
//  }

//For every even number in your loop, log 
//"...human...why you taking pictures of me?...",
// "...the catnip made me do it...", 
//or "...why does the red dot always get away..." 
//at random.
// let cat=["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
 
// for(i=0;i<20;i++){
//     if(i %2==0)
//     Math.random(2);
//     console.log(cat.Math();
//  }

////Write a javascript application that logs all numbers from 1 - 100.

// for(i=1;i<=100;i++){
//     console.log(i)
// }

//If a number is divisible by 3 log "Fizz" instead of the number.
// for(i=1;i<=100;i++){
//     if(i %3==0){
//     console.log('fizz')
//     }
//     else{
//         console.log(i)
//     }
// }

//If a number is divisible by 5 log "Buzz" instead of the number.
// for(i=1;i<=100;i++){
//    if(i % 3 === 0 && i % 5 ===0){
//        console.log("FizzBuzz");
//     else if(i %3==0){
//         console.log('fizz')
//         }
//     else if(i %5==0){
//     console.log('buzz')
//     }
   
//     else{
//         console.log(i)
//     }
// }


//  const kenny = ["Kenny", 1000, "Austin"];
// const jimHaff = ["Jim H", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
//  const jimClark = ["Jim C", 186, "LA"];
// const ryan = ["Ryan", 65, "Denver"];

//1
// kenny.splice(0,1,"Gameboy");
//  console.log(kenny[0]);
//2
//  var JimAge= jimClark[1];
//  var NewJimAge= JimAge+1;
//  jimClark.splice(1,1,NewJimAge);
// console.log(jimClark)
 //3
// ryan[0,2]= ["Batman","Gotham"];
// console.log(ryan[0,2]);
//4
// reuben.pop();
// console.log(reuben);
// reuben.push("Chicago");
// console.log(reuben);
//5
// jimHaff.pop();
// jimHaff.push("Los Angeles","New York","Sacramento");
// console.log(jimHaff);
//Bonus
// jimHaff.splice(2,1)
// console.log(jimHaff);

//Ninja Turtles

// let ninja = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
// function changeUp(){
//     for(i=0;i<ninja.length;i++){
//     ninja.toUpperCase(ninja[i])
//     console.log(ninja)
//     }
// }
// console.log(changeUp(ninja))

//

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

  // Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
 // removing the show from kristyns closet and giving it a variable name 
//var kristynsShoe = kristynsCloset.splice(0,1);
// console.log(kristynsCloset);
// console.log(kristynsShoe) ; 
//placing the shoe in thoms closet
// thomsCloset[2].push(kristynsShoe);
// console.log(thomsCloset[2]);



