// const square =function(x){

//     return x * x
// }
// const square =(x)=>{
// return x *x 
// }
// const square = (x) => x * x 
// console.log(square(4));
const event ={
    name:"birthday party",
    guestlist:["bristi","ankush","debanjan","arnab","tojo"],
    printguestlist(){
        console.log("guest list for " + this.name);
        this.guestlist.forEach((guest)=>{
            console.log( guest + " is attending"  +  this.name);
        })
    }
}
event.printguestlist()