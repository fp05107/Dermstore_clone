document.querySelector("#acc").addEventListener("click",function(){
    window.location.href="login.html"
})
document.querySelector("#crt").addEventListener("click",function(){
    window.location.href="cart.html"
})
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
     description:"Best Of DermStore Refresh edit -$640 Value",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"80$"},
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/13278644-1174951890758541.jpg",
     description:"Skin Medica TNS Advanced + serum",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"100$"},
    {image:"	https://static.thcdn.com/images/small/webp//productimg/original/11291541-5024871574576726.jpg",
     description:"Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment (0.5 oz. - $175 Value)",
     discount:"Up to 15% savings on Auto-Replenishment",
    price:"150$"},
]
let prod2Arr = [
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/11291541-5024871574576726.jpg",
     description:"Paula's Choice SKIN PERFECTING 2 BHA Liquid Exfoliant (4 fl. oz.)",
     discount:"Up to 15% savings on Auto-Replenishment",
    price:"150$"},
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/11588281-8764882139037003.jpg",
     description:"Best Of DermStore x skin Care Foundation Sun care Kit - $150 value",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"60$"},
    {image:"	https://static.thcdn.com/images/small/webp//productimg/original/11174178-1044909106371632.jpg",
     description:"Best Of DermStore x skin Care Foundation Sun care Kit - $150 value",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"250$"},
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/11370303-1514871771637066.jpg",
     description:"Best Of DermStore x skin Care Foundation Sun care Kit - $200 value",
     discount:"Upto 55% savings on Best of Derm Store",
    price:"10$"}

]
let prod3Arr = [
    {image:"	https://static.thcdn.com/images/small/webp//productimg/original/12901956-1634871508329232.jpg",
     description:"Olaplex No. 4 Bond Maintenance Shampoo (8.5 fl. oz.)",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"500$"},
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/12915557-2954917112863726.jpg",
     description:"Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment (0.5 oz. - $175 Value)",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"40$"},
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/11290635-1804892767902966.jpg",
     description:"Best Of DermStore x skin Care Foundation Sun care Kit - $150 value",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"20$"},
    {image:"	https://static.thcdn.com/images/small/webp//productimg/original/12597163-5554871574934407.jpg",
     description:"Olaplex No. 4 Bond Maintenance Shampoo (8.5 fl. oz.)",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"200$"},
   
]
let prod4Arr = [
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/11174178-1044909106371632.jpg",
     description:"Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment (0.5 oz. - $175 Value)",
     discount:"Upto 65% savings on Best of Derm Store",
    price:"90$"},
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/12915557-2954917112863726.jpg",
     description:"Obagi Medical Nu-Derm Toner (6.7 fl. oz.)",
     discount:"Upto 55% savings on Best of Derm Store",
    price:"40$"},
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/11370303-1514871771637066.jpg",
     description:"Best Of DermStore x skin Care Foundation Sun care Kit - $150 value",
     discount:"Upto 65% savings on Best of Derm Store Skin care",
    price:"80$"},
    {image:"https://static.thcdn.com/images/small/webp//productimg/original/13278644-1174951890758541.jpg",
     description:"Obagi Medical Nu-Derm Toner (6.7 fl. oz.)",
     discount:"Upto 65% savings on Best of Derm Store Sun Scream",
    price:"500$"}
   
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
div1p.innerText=prod1Arr[prodnum].description
let div2p = document.querySelector("#cont2>p")
div2p.innerText=prod2Arr[prodnum].description
let div3p = document.querySelector("#cont3>p")
div3p.innerText=prod3Arr[prodnum].description
let div4p = document.querySelector("#cont4>p")
div4p.innerText=prod4Arr[prodnum].description
let div1divp = document.querySelector("#first")
div1divp.innerText=prod1Arr[prodnum].discount;
let div2divp = document.querySelector("#second")
div2divp.innerText=prod2Arr[prodnum].discount;
let div3divp = document.querySelector("#third")
div3divp.innerText=prod3Arr[prodnum].discount;
let div4divp = document.querySelector("#fourth")
div4divp.innerText=prod4Arr[prodnum].discount;
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
div1p.innerText=prod1Arr[prodnum].description
let div2p = document.querySelector("#cont2>p")
div2p.innerText=prod2Arr[prodnum].description
let div3p = document.querySelector("#cont3>p")
div3p.innerText=prod3Arr[prodnum].description
let div4p = document.querySelector("#cont4>p")
div4p.innerText=prod4Arr[prodnum].description
let div1divp = document.querySelector("#first")
div1divp.innerText=prod1Arr[prodnum].discount;
let div2divp = document.querySelector("#second")
div2divp.innerText=prod2Arr[prodnum].discount;
let div3divp = document.querySelector("#third")
div3divp.innerText=prod3Arr[prodnum].discount;
let div4divp = document.querySelector("#fourth")
div4divp.innerText=prod4Arr[prodnum].discount;

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
div1h4.innerText=prod1Arr[prodnum].price;
let div2h4 = document.querySelector("#cont2>h4")
div2h4.innerText=prod2Arr[prodnum].price;
let div3h4 = document.querySelector("#cont3>h4")
div3h4.innerText=prod3Arr[prodnum].price;
let div4h4 = document.querySelector("#cont4>h4")
div4h4.innerText=prod4Arr[prodnum].price;
let div1p = document.querySelector("#cont1>p")
div1p.innerText=prod1Arr[prodnum].description
let div2p = document.querySelector("#cont2>p")
div2p.innerText=prod2Arr[prodnum].description
let div3p = document.querySelector("#cont3>p")
div3p.innerText=prod3Arr[prodnum].description
let div4p = document.querySelector("#cont4>p")
div4p.innerText=prod4Arr[prodnum].description
let div1divp = document.querySelector("#first")
div1divp.innerText=prod1Arr[prodnum].discount;
let div2divp = document.querySelector("#second")
div2divp.innerText=prod2Arr[prodnum].discount;
let div3divp = document.querySelector("#third")
div3divp.innerText=prod3Arr[prodnum].discount;
let div4divp = document.querySelector("#fourth")
div4divp.innerText=prod4Arr[prodnum].discount;
})
document.querySelector("#beauty").addEventListener("click",function(){
    window.location.href="beautyfix.html"
})
let prod11arr = [
    {image:"https://static.thcdn.com/images/small/webp/widgets/208-us/23/Site_294x368-080123.png",desc:"Best Skin Care Beauty Products"},
    {image:"https://static.thcdn.com/images/small/webp/widgets/208-us/53/SITE_Mobile_600%E2%80%8A%C3%97%E2%80%8A750-080553.jpg",desc:"Vitamin-c and anti-oxidants"}

];
let prod22arr = [
    {image:"https://static.thcdn.com/images/small/webp/widgets/208-us/17/HomePageBannerNewRoutineMobile-084945-074617.jpg",
    desc:"Best Retinol Creams and Serums"},
    {image:"https://static.thcdn.com/images/small/webp/widgets/208-us/04/Wellness_White-061404.png",
    desc:"Selfcare and Wellness"}
];
let prod33arr = [
    {image:"https://static.thcdn.com/images/small/webp/widgets/208-us/15/original-eltamd-sb-10-20-090822-081515.jpg",
    desc:"SPF & Sunscreen"},
    {image:"https://static.thcdn.com/images/small/webp/widgets/208-us/18/Olaplex_trending_white-055218.png",
    desc:"Trending Products"}
];
let prod44arr = [
    {image:"https://static.thcdn.com/images/small/webp/widgets/208-us/32/Trending-_Build_Your_Own_Routine-082732.png",
    desc:"Build your skin care Routine"},
    {image:"https://static.thcdn.com/images/small/webp/widgets/208-us/17/HomePageBannerNewRoutineMobile-084945-074617.jpg",
    desc:"Take Care of your Skin"}
];

let  prodnum2 = 0;
let w =  document.querySelector("#revita1>img");
w.src=prod11arr[prodnum2].image;
let x =  document.querySelector("#revita2>img");
x.src=prod22arr[prodnum2].image;
let y =  document.querySelector("#revita3>img");
y.src=prod33arr[prodnum2].image
let z =  document.querySelector("#revita4>img");
z.src=prod44arr[prodnum2].image;
let a = document.querySelector("#revita1>h3");
a.innerText=prod11arr[prodnum2].desc;
let b = document.querySelector("#revita2>h3");
b.innerText=prod22arr[prodnum2].desc;
let c = document.querySelector("#revita3>h3");
c.innerText=prod33arr[prodnum2].desc;
let d = document.querySelector("#revita4>h3");
d.innerText=prod44arr[prodnum2].desc;
document.querySelector("#left").addEventListener("click",function(){
    prodnum2--;
    if(prodnum2<0){
        prodnum2=prod11arr.length-1;
    }
    let w =  document.querySelector("#revita1>img");
w.src=prod11arr[prodnum2].image;
let x =  document.querySelector("#revita2>img");
x.src=prod22arr[prodnum2].image;
let y =  document.querySelector("#revita3>img");
y.src=prod33arr[prodnum2].image
let z =  document.querySelector("#revita4>img");
z.src=prod44arr[prodnum2].image;
let a = document.querySelector("#revita1>h3");
a.innerText=prod11arr[prodnum2].desc;
let b = document.querySelector("#revita2>h3");
b.innerText=prod22arr[prodnum2].desc;
let c = document.querySelector("#revita3>h3");
c.innerText=prod33arr[prodnum2].desc;
let d = document.querySelector("#revita4>h3");
d.innerText=prod44arr[prodnum2].desc;
})
document.querySelector("#right").addEventListener("click",function(){
    prodnum2++;
    if(prodnum2==prod11arr.length){
        prodnum2=0;
    }
    let w =  document.querySelector("#revita1>img");
w.src=prod11arr[prodnum2].image;
let x =  document.querySelector("#revita2>img");
x.src=prod22arr[prodnum2].image;
let y =  document.querySelector("#revita3>img");
y.src=prod33arr[prodnum2].image
let z =  document.querySelector("#revita4>img");
z.src=prod44arr[prodnum2].image;
let a = document.querySelector("#revita1>h3");
a.innerText=prod11arr[prodnum2].desc;
let b = document.querySelector("#revita2>h3");
b.innerText=prod22arr[prodnum2].desc;
let c = document.querySelector("#revita3>h3");
c.innerText=prod33arr[prodnum2].desc;
let d = document.querySelector("#revita4>h3");
d.innerText=prod44arr[prodnum2].desc;
})