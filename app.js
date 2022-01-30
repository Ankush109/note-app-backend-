const yargs =require("yargs")
const notes = require('./notes.js')

yargs.version('1.1.0')

//create add command :-
yargs.command({
    command:"add",
    describe:"add a new note",
    builder:{
        title:{
                describe:"note title",
                demandOption:true,
                type:'string'
        },
        body:{
            describe:"body of the text ",
            demandOption:true,
            type:"string"

        }
    },
    handler:function(argv){
        notes.addnote(argv.title,argv.body)
    }
})
//create remove command 
yargs.command({
    command:"remove",
    describe:"remove a note",
    builder:{
        title:{
            describe:"title",
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
    notes.removenote(argv.title)
    }
})
//create a list command
yargs.command({
    command:"list",
    describe:"list all the notes",
    handler:function(){
        console.log("list all the notes");
    }
})
yargs.command({
    command:"read",
    describe:"read all the notes",
    handler:function(){
        console.log("read all the notes");
    }
})
yargs.parse()