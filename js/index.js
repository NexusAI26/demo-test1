// console.log("Hello world!")
// console.warn("Pratik")
// console.error("pratik")

// let clz = "abc";
// console.log(clz)
// clz = "xyz"
// console.log(clz)

let arrayone = [
    { title: "WORKING TIME: " },
    { title: "FIND US:  " },
]
let datatwo = '';


arrayone.map((value, index) => {
    datatwo += `
    <div class = "work">
    <div class = "icon"></div>
    <div>
    <p class="info_title">${value.title
        }</p >
<div>9:00 - 5:00</div>
    </div > `
})

let info_data = document.getElementById("info");                //assigns the div with id "info" to variable info_data 
info_data.innerHTML = datatwo;