let test_data =[
    {
        image:"image/soap.jpeg",
        text_content:"Tan & Body Soap"
    },
    {
        image:"image/sun.jpeg",
        text_content:"Sun Screen"
    },
    {
        image:"image/face.jpeg",
        text_content:"Face wash"
    },
    {
        image:"image/sampo.webp",
        text_content:"Lotion"
    }
]

let data0 = 0
let image = document.querySelector(".image")
let text_content = document.querySelector(".cont")
function testimonial(){
    let current =test_data[data0]
    image.src = current.image
    text_content.innerHTML = current.text_content
    data0++
    
    if(data0===test_data.length){
        data0 = 0
    }
}
setInterval(()=>{testimonial()},2000);
testimonial()

// internship project
let test =[
    {
        image1:"image/oil.jpeg",
        content:"Hair oil",
        desc:"",
        link:"#",
        name:"Visit Page" 
    },
    {
        image1:"image/shamp.jpeg",
        content:"Hair Shampoo",
        desc:"" ,
        link:"#",
        name:"Visit Page"
    },
    {
        image1:"image/condi.jpeg",
        content:"Hair Conditioner",
        desc:"" ,
        link:"#",
        name:"Visit Page"
    }
]

let data1 = 0
let image1 = document.querySelector(".image1")
let content = document.querySelector(".conte1")
let desc = document.querySelector(".inter")
let link = document.querySelector(".lin")
let name = document.querySelector(".linkbu1")

function testi(){
    
    let current =test[data1]
    desc.innerHTML = current.desc
    image1.src = current.image1
    content.innerHTML = current.content
    link.href = current.link
    name.innerHTML =current.name
    data1++
    
    if(data1===test.length){
        data1 = 0
    }
}

setInterval(()=>{testi()},2000);
testi()


let test1 =[
    {
        image2:"image/tablet.jpeg",
    },
    
    {
        image2:"image/tablet1.jpeg",
    },
    // {
        
    //     image2:"image/pofile.jpg",
    // }
        

]

let data2 = 0
let image2 = document.querySelector(".image2")

function testimo(){
    let current =test1[data2]
    image2.src = current.image2
    data2++
    
    if(data2===test1.length){
        data2 = 0
    }
}

setInterval(()=>{testimo()},2000);
testimo()