//https://dog.ceo/api/breeds/image/random
const API = "https://dog.ceo/api/breeds/image/random";
const butt = document.querySelector(".random")
const img = document.querySelector(".img")


butt.addEventListener('click', () => {
    fetch(API)
    .then(res =>{
        return res.json()
    })
    .then(res =>{
        img.innerHTML = `<img src="${res.message}"/>`
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
})

// const getDog = async () => {
//     try{
//         const response = await fetch(API)
//         const data = await response.json()
//         const image = img.innerHTML = `<img src="${data.message}"/>`
//         console.log(data)
//     }
//     catch(err){
//         console.log("Error >>>", err)
//     }
// }

// butt.addEventListener('click', () =>{ 
//     getDog()
// })
