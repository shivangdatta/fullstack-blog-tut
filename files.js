const fs = require('fs')

// reading files
// fs.readFile( './docs/blog1.txt' , (err , data)=>{
//     if(err){
//         console.log(error)
//     }
//     else{
//         console.log(data.toString())
//     }
// })

// writing files
// fs.writeFile( './docs/blog1.txt' , 'this text is the overwriting text' , ()=>{
//     console.log('blog1 file overwritten')
// } )

// fs.writeFile('./docs/blog2.txt' , 'this is for creating a file using writefile ' , ()=>{
//     console.log('incase file not created already -> created a new file')
// })

// directories

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets' , (err)=>{
//         if(err) console.log(err)
//         else console.log('created a new directory')
//     })
// }
// else{
//     fs.rmdir('./assets' , (err)=>{
//         if(err) console.log(err)
//         else console.log('removing the folder')
//     })
// }

// deleting files

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt' , (err)=>{
        if(err) console.log(err)
        else console.log('deleted file')
    })
}
