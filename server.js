const http = require('http')
const fs = require('fs')

const server = http.createServer((req , res)=>{
    // console.log('request made')
    // console.log(req)
    console.log(req.url , req.method)

    // res.setHeader('Content-Type' , 'text/plain')
    // res.write('hello users')
    // res.end()

    // res.setHeader('Content-Type','text/html')
    // res.write('<head><link rel="stylesheet" href="#" ><head>')
    // res.write('<p>"hello users"</p>')
    // res.end()

    // res.setHeader('Content-Type' , 'text/html')
    // fs.readFile('./views/index.html' , (err , data)=>{
    //     if(err) console.log(err)
    //     else res.write(data)
    //     res.end()
    // })

    res.setHeader('Content-Type' , 'text/html')
    let path = './views'

    switch(req.url){
        case '/' :
            path += '/index.html'
            res.statusCode = 200
            break
        case '/about' :
            path += '/about.html'
            res.statusCode = 200
            break
        case '/about-me' : 
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
        default :
            path += '/404.html'
            res.statusCode = 404
            break
    }

    fs.readFile(path , (err , data) => {
        if(err) console.log(err)
        else res.write(data)
        res.end()
    })


})

server.listen(3000 , 'localhost' , ()=>{
    console.log('listening for requests on local host 3000')
})