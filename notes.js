const fs=require('fs')

const notes=function(){
    return "notes++"
}
const addnote =function(title,body){
//loading the previous notes:-
const notes=loadnote()
// checking if any note is duplicate or not :-
const duplicatenotes =notes.filter(function(note){
return note.title ===title
})
if(duplicatenotes.length===0){
    notes.push({
        title:title,
        body:body
    })
    savednotes(notes)
    console.log("new note added");
}else {
    console.log("note title taken!");
}

}
// remove function :-
const removenote =function(title){
const notes =loadnote()
const notestokeep =notes.filter(function(note){
    return note.title !==title
})
if(notes.length>notestokeep.length){
    console.log("note removed");
    savednotes(notestokeep)
}else{
    console.log("no note found to be removed");
}

}
//A simple function to save all the notes:-
const savednotes=function(notes){
const datajson =JSON.stringify(notes)
fs.writeFileSync("notes.json",datajson)
}
// making a function to load existing notes so that new notes does'nt override the previous ones:-
const loadnote=function(){
    try {
        const databuffer =fs.readFileSync('notes.json')
const datajson =databuffer.toString()
return JSON.parse(datajson)
    } catch (error) {
    return []
    }

}
module.exports={
    notes:notes,
    addnote:addnote,
    removenote:removenote
}