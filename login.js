document.querySelector("#btn").addEventListener("click",function(event){
    event.preventDefault()
    window.location.href="Signup.html"
})

let loginarr = JSON.parse(localStorage.getItem("signupdata")) || [];
document.querySelector("#login").addEventListener("click",function(event){
    event.preventDefault()
    if(document.querySelector("#email").value=="" || document.querySelector("#password").value==""){
        alert("Please Fill Out all the fields")
    }
    else{
        let x = true;
        loginarr.forEach(function(elem){
            if(document.querySelector("#email").value!=elem.Email || document.querySelector("#password").value!=elem.Password){
                x = false;
            }else{
                x = true;
            }
        })
        if(loginarr.length==0){
            alert("No user")
        }
        else if(x==false){
            alert("incorrect email or password")
        }else if(x==true){
            alert("Login Successfully")
        }
        console.log(loginarr);
    }
})