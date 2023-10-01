fetch("https://api.kanye.rest").then((res)=>(res.json())).then((e)=>{
    const joke=document.getElementById("joke")
    joke.innerHTML=e.quote
}).catch((e)=>{
    const joke=document.getElementById("joke")
    joke.innerHTML=e.message
})