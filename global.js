console.log(global)

const greet = (name) => {
    console.log(name)
}

global.setTimeout(()=>{
    greet("shivang")
},1000)

const id = setInterval(()=>{
    greet("shivang in a loop")
},1000)

setTimeout(() => {
   clearInterval(id) 
}, 6000);