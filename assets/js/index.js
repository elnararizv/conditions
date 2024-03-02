// ***Tapsiriq 1.
// Enter your age: 30
// 
// Enter your age:15
// You are left with 3 years to drive.

//Not: Yaş mənfi ola bilməyəcəyi üçün 0-dan kiçik olma vəziyyətini də yoxladım

// var age=prompt("Please enter your age")
//  if(age<18 && age>=0){
//     alert("You are left with" +" "+(18-parseInt(age)) +" "+"years to drive.")
//  }
//  else if(age>=18){
//  alert("You are old enough to drive.")
//  }
//  else{
//     alert("Wrong Input")
//  }

// ***Taprisiq 2.
// Enter your age: 30
// You are 5 years older than me.

// var myAge=21
// var yourAge=prompt("Please enter your age:")
 
// if(yourAge<myAge && yourAge>=0){
//     alert("You are"+" "+(myAge-parseInt(yourAge))+" "+"years younger than me" )
// } else if(yourAge>myAge){
//      alert("You are"+" "+(parseInt(yourAge)-myAge)+" "+"years older than me" )
//      }
//      else{
//         alert("Wrong Input")
//      }


// ***Tapsiriq 3.
// Enter a number: 2
// 2 is an even number
// Enter a number: 9
// 9 is is an odd number.

// var num = prompt("Enter a number:")
// if (num % 2 === 0) {
//     alert((num) + " " + "is an even number")}
// else {
//  alert((num) + " " + "is an odd number")
// }

// Not:string olub-olmadigini yoxlamaq ucun asagidaki varianti da yazmaq istedim.Hansi daha duzduse onu nezere alin :)

var num = prompt("Enter a number:")
if (num % 2 === 0) {
    alert((num) + " " + "is an even number")}
else if(num % 2 === 1) {
 alert((num) + " " + "is an odd number")
}else{
    alert("Wrong input, please try again")
}
