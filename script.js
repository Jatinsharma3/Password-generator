let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_?"
let  w = ["weakest","12345678","12211122","abcdefgh","00211100","applebite"]
let fun = ["bite","password","name","joker","random","undefined"]


class Password{
 constructor(){
   console.log("Welcome to password generator.")
   this.pass = ""
   this.pass1=""
   this.pass2=""
 }
 weakpassword(){
   this.pass1 =
     w[Math.floor(Math.random()*w.length)]
   return this.pass1
 }
 
 Generatepassword(){
   this.pass= ""

   let o = 0;
   while (o < 8) {
     this.pass += char[Math.floor(Math.random() * char.length)];
     o += 1;
   }
   return this.pass;
 }

 //     let i = 0
 //     while(i<len){
 //       for(let i= 0; i<1; i++){
 //      this.pass += char[Math.floor(Math.random()*char.length)]
 //       }
       
 //       // this.pass += num[Math.floor(Math.random()*num.length)]
 //       // this.pass += spe[Math.floor(Math.random()*spe.length)]
       
 //       i+=1
         
 //     }
 //     // j+=1
 //   // }
 //     // this.pass= this.pass.substr(0,len)
 //       return this.pass
   
 //   }
 // // }
 
 funnypasssword(){
    this.pass2 = fun[Math.floor(Math.random()*fun.length)]
   return this.pass2
 }
}
let a = new Password()

console.log(a.weakpassword())
console.log(a.Generatepassword(8))
console.log(a.funnypasssword())


function myfun(){
 document.getElementById("input").value =  `Weakpassword is: ${a.weakpassword()}`
}
function myfun1(){
 document.getElementById("input").value =`Strongpassword is: ${a.Generatepassword()}`
}
function myfun2(){
 document.getElementById("input").value = `Funnypassword is : ${a.funnypasssword()}`
}
