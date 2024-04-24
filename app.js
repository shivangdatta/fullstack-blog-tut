const express = require('express')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogroutes')

const app = express()


// connect to mongodb 
const dbURI = 'mongodb+srv://shivangdatta:Vdsd%401234@node-tut.zaxac3u.mongodb.net/?retryWrites=true&w=majority&appName=node-tut'


// view engine used to inject dynamic content in web page
app.set('view engine' , 'ejs')


mongoose.connect(dbURI )
.then((result) => {
    console.log('connected to database')
    app.listen(3000)
})
.catch((error) => console.log(error))
// listing to port 3000

// using middleware for static files
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use((req , res , next) => {
    // this is a logger middleware used to log various details
    console.log('new request made ')
    console.log('path' , req.path)
    console.log('host' , req.hostname)
    console.log('method' , req.method)
    next()
})


// mongoose and mongo sandbox routes for demonstartion and testing purposes
// app.get('/add-blog' , (req , res)=>{
//     const blog = new Blog({
//         title : 'new first blog ',
//         snippet : 'first new blog',
//         body : 'lorem20 lorem 02 lorem20'
//     }
//     )
//     blog.save()
//         .then((result)=>{res.send(result)})
//         .catch(err => console.log(err))

// })

// app.get('/all-blogs' , (req,res)=>{
//     Blog.find()
//         .then(result => res.send(result))
//         .catch(err => console.log(err))
// })

// app.get('/singleblog' , (req, res)=>{
//     Blog.findById('66250d6e98d87db9ffcdc1af')
//         .then(result => res.send(result))
//         .catch(err => console.log(err))
// })


// routes
// app.get('/' , (req , res)=>{
//     // res.sendFile('./views/index.html' , {root : __dirname})
//     const blogs = [
//         {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//         {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//         {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'}
//     ]

//     res.render('index' , {title: 'Home' , blogs} )
// })

app.get('/' , (req,res) => res.redirect('/blogs'))

app.use(blogRoutes)

app.get('/about' , (req,res)=>{
    // res.sendFile('./views/about.html' , {root : __dirname})
    res.render('about', { title: 'About' });
  
})

app.get('/about-us' , (req , res)=>{
    res.redirect('/about')
})

//blog routes
// app.get('/blogs' , (req ,res)=>{
//     Blog.find().sort({createdAt : -1})
//         .then(result => res.render('index' , {title : 'all blogs' , blogs : result}))
//         .catch(err => console.log(err))
// })

// app.get('/blogs/create' , (req,res)=>{
//     res.render('create' , {title : 'create a blog'})
// })

// app.post('/blogs' , (req , res)=>{
//     console.log(req.body)
//     const blog =  new Blog(req.body)
//     blog.save()
//         .then( result => res.redirect('/blogs'))
//         .catch(err => console.log(err) )
// })

// app.get('/blogs/:id' , (req , res)=>{
//     const id = req.params.id
//     Blog.findById(id)
//         .then((result) => res.render('details' , { blog : result , title : 'pulled record'}) )
//         .catch(err => console.log(err))
// })

// app.delete('/blogs/:id' , (req, res)=>{
//     const id = req.params.id
//     Blog.findByIdAndDelete(id)
//         .then(result => res.json({redirect : '/blogs'}))
//         .catch(err => console.log(err))
// })

// every other type of request should be handled before the 404 
app.use((req,res)=>{
    // res.status(404).sendFile('./views/404.html' , {root : __dirname})
    res.status(404).render('404' , {title : '404'})
})


