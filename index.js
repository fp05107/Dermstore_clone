let firstcrauserimg = [
    "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/44/original-0629-STDCRE-38074-DS-CG-July-Priority-Batch-Shot02-HomePage_1920x700-050944.jpg",
    "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/28/original-0704-STDCRE-38075-DS-AM-July-2022-Photography-Remaining-Btching-1920x700-050028.jpg",
    "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/39/original-Summer_Shop_1920x700-041339.png",
    "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/51/original-BoD_SCF_Kit_1920x700_%283%29-091051.png"
]
let leftBtn = document.getElementById("left-btn");
let rightBtn = document.getElementById("right-btn");
let crauser = document.getElementById("crauser");
let imageState = 0;
rightBtn.addEventListener("click",function(){
    imageState++;
    if(imageState==firstcrauserimg.length){
        imageState=0;
    }
    crauserimg.src = firstcrauserimg[imageState]
})
leftBtn.addEventListener("click",function(){
    imageState--;
    if(imageState<0){
        imageState=firstcrauserimg.length-1;
    }
    crauserimg.src = firstcrauserimg[imageState]
})

let prod1Arr = [
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/13811675-9994964348315184.jpg",
     description:"Best Of DermStore x skin Care Foundation Sun care Kit - $150 value",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"50$"},
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/11370303-1074944341868735.jpg",
     description:"Best Of DermStore x skin Care Foundation Sun care Kit - $150 value",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"50$"},
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/13278644-1174951890758541.jpg",
     description:"Best Of DermStore x skin Care Foundation Sun care Kit - $150 value",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"50$"},
    {image:"	https://static.thcdn.com/images/small/webp//productimg/original/11291541-5024871574576726.jpg",
     description:"Best Of DermStore x skin Care Foundation Sun care Kit - $150 value",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"50$"},
]
let prod2Arr = [
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/11291541-5024871574576726.jpg",
     description:"Best Of DermStore x skin Care Foundation Sun care Kit - $150 value",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"50$"},
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/11588281-8764882139037003.jpg",
     description:"Best Of DermStore x skin Care Foundation Sun care Kit - $150 value",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"50$"},
    {image:"	https://static.thcdn.com/images/small/webp//productimg/original/11174178-1044909106371632.jpg",
     description:"Best Of DermStore x skin Care Foundation Sun care Kit - $150 value",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"50$"},
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/11370303-1514871771637066.jpg",
     description:"Best Of DermStore x skin Care Foundation Sun care Kit - $150 value",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"50$"}

]
let prod3Arr = [
    {image:"	https://static.thcdn.com/images/small/webp//productimg/original/12901956-1634871508329232.jpg",
     description:"Best Of DermStore x skin Care Foundation Sun care Kit - $150 value",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"50$"},
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/12915557-2954917112863726.jpg",
     description:"Best Of DermStore x skin Care Foundation Sun care Kit - $150 value",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"50$"},
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/11290635-1804892767902966.jpg",
     description:"Best Of DermStore x skin Care Foundation Sun care Kit - $150 value",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"50$"},
    {image:"	https://static.thcdn.com/images/small/webp//productimg/original/12597163-5554871574934407.jpg",
     description:"Best Of DermStore x skin Care Foundation Sun care Kit - $150 value",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"50$"},
   
]
let prod4Arr = [
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/11174178-1044909106371632.jpg",
     description:"Best Of DermStore x skin Care Foundation Sun care Kit - $150 value",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"50$"},
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/12915557-2954917112863726.jpg",
     description:"Best Of DermStore x skin Care Foundation Sun care Kit - $150 value",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"50$"},
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/11370303-1514871771637066.jpg",
     description:"Best Of DermStore x skin Care Foundation Sun care Kit - $150 value",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"50$"},
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/13278644-1174951890758541.jpg",
     description:"Best Of DermStore x skin Care Foundation Sun care Kit - $150 value",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"50$"}
   
]
let prodnum = 0;
let div1 = document.querySelector("#cont1")
let div2 = document.querySelector("#cont2")
let div3 = document.querySelector("#cont3")
let div4 = document.querySelector("#cont4")
let div1img = document.querySelector("#cont1>img")
div1img.src=prod1Arr[prodnum].image;
let div2img = document.querySelector("#cont2>img")
div2img.src=prod2Arr[prodnum].image;
let div3img = document.querySelector("#cont3>img")
div3img.src=prod3Arr[prodnum].image;
let div4img = document.querySelector("#cont4>img")
div4img.src=prod4Arr[prodnum].image;
let div1h4 = document.querySelector("#cont1>h4")
div1h4.innerText=prod1Arr[prodnum].price;
let div2h4 = document.querySelector("#cont2>h4")
div2h4.innerText=prod2Arr[prodnum].price;
let div3h4 = document.querySelector("#cont3>h4")
div3h4.innerText=prod3Arr[prodnum].price;
let div4h4 = document.querySelector("#cont4>h4")
div4h4.innerText=prod4Arr[prodnum].price;
let div1p = document.querySelector("#cont1>p")
let div2p = document.querySelector("#cont2>p")
let div3p = document.querySelector("#cont3>p")
let div4p = document.querySelector("#cont4>p")
let div1divp = document.querySelector("#cont1>div>p")
let div2divp = document.querySelector("#cont2>div>p")
let div3divp = document.querySelector("#cont3>div>p")
let div4divp = document.querySelector("#cont4>div>p")
document.querySelector("#prodleftBtn").addEventListener("click",function(){
    prodnum--;
    if(prodnum<0){
        prodnum=prod1Arr.length-1;
    }
    let div1 = document.querySelector("#cont1")
    let div2 = document.querySelector("#cont2")
    let div3 = document.querySelector("#cont3")
    let div4 = document.querySelector("#cont4")
    let div1img = document.querySelector("#cont1>img")
    div1img.src=prod1Arr[prodnum].image;
    let div2img = document.querySelector("#cont2>img")
    div2img.src=prod2Arr[prodnum].image;
    let div3img = document.querySelector("#cont3>img")
    div3img.src=prod3Arr[prodnum].image;
    let div4img = document.querySelector("#cont4>img")
    div4img.src=prod4Arr[prodnum].image;
    let div1h4 = document.querySelector("#cont1>h4")
    div1h4.innerText=prod1Arr[prodnum].price;
    let div2h4 = document.querySelector("#cont2>h4")
    div2h4.innerText=prod2Arr[prodnum].price;
    let div3h4 = document.querySelector("#cont3>h4")
    div3h4.innerText=prod3Arr[prodnum].price;
    let div4h4 = document.querySelector("#cont4>h4")
    div4h4.innerText=prod4Arr[prodnum].price;
    let div1p = document.querySelector("#cont1>p")
    let div2p = document.querySelector("#cont2>p")
    let div3p = document.querySelector("#cont3>p")
    let div4p = document.querySelector("#cont4>p")
    let div1divp = document.querySelector("#cont1>div>p")
    let div2divp = document.querySelector("#cont2>div>p")
    let div3divp = document.querySelector("#cont3>div>p")
    let div4divp = document.querySelector("#cont4>div>p")

})
document.querySelector("#prodrightBtn").addEventListener("click",function(){
    prodnum++;
    if(prodnum==prod1Arr.length){
        prodnum = 0;
    }
    let div1 = document.querySelector("#cont1")
    let div2 = document.querySelector("#cont2")
    let div3 = document.querySelector("#cont3")
    let div4 = document.querySelector("#cont4")
    let div1img = document.querySelector("#cont1>img")
    div1img.src=prod1Arr[prodnum].image;
    let div2img = document.querySelector("#cont2>img")
    div2img.src=prod2Arr[prodnum].image;
    let div3img = document.querySelector("#cont3>img")
    div3img.src=prod3Arr[prodnum].image;
    let div4img = document.querySelector("#cont4>img")
    div4img.src=prod4Arr[prodnum].image;
    let div1h4 = document.querySelector("#cont1>h4")
    let div2h4 = document.querySelector("#cont2>h4")
    let div3h4 = document.querySelector("#cont3>h4")
    let div4h4 = document.querySelector("#cont4>h4")
    let div1p = document.querySelector("#cont1>p")
    let div2p = document.querySelector("#cont2>p")
    let div3p = document.querySelector("#cont3>p")
    let div4p = document.querySelector("#cont4>p")
    let div1divp = document.querySelector("#cont1>div>p")
    let div2divp = document.querySelector("#cont2>div>p")
    let div3divp = document.querySelector("#cont3>div>p")
    let div4divp = document.querySelector("#cont4>div>p")
})