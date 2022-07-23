document.querySelector("#btn").addEventListener("click",function(event){
    event.preventDefault()
    window.location.href="Signup.html"
})

let loginarr = JSON.parse(localStorage.getItem("signupdata")) || [];
console.log(loginarr);
document.querySelector("#login").addEventListener("click",function(event){
    event.preventDefault()
    if(document.querySelector("#email").value=="" || document.querySelector("#password").value==""){
        alert("Please Fill Out all the fields")
    }
    for(let  i=0;i<loginarr.length;i++){
        if(document.querySelector("#email").value!=loginarr[i].Email || document.querySelector("#password").value!=loginarr[i].Password){
            alert("Incorrect email or password")
        }else{
            alert("Login Successfully");
            
        }
    }
})