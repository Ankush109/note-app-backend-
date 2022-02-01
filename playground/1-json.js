const fs= require('fs')
// const book ={
//     title:"ego is the enemy",
//     author:"ryan holder"
// }
// const bookjson=JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookjson)
// const databuffer = fs.readFileSync('1-json.json')
// const datajson= databuffer.toString()
// const data =JSON.parse(datajson)
// console.log(data.title);
const databuffer =fs.readFileSync("1-json.json")
const datajson=databuffer.toString()
const user =JSON.parse(datajson)
user.title ="arnab"
user.author=54
const usrrjson=JSON.stringify(user)
fs.writeFileSync("1-json.json",usrrjson)