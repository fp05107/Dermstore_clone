
let signupArr = JSON.parse(localStorage.getItem("signupdata")) || [];
document.querySelector("button").addEventListener("click",function(event){
    event.preventDefault();
    if(document.querySelector("#name").value=="" || document.querySelector("#email").value=="" 
    || document.querySelector("#confirm_email").value=="" || document.querySelector("#password").value=="" || document.querySelector("#confirm_password").value==""){
        alert("Please Fill out all the manadatory fields")
    }else if(document.querySelector("#password").value!=document.querySelector("#confirm_password").value || 
    document.querySelector("#email").value!=document.querySelector("#confirm_email").value){
        alert("Incorrect Confirm email or password")
    }
    else{
    let signupObj = {
        Name:document.querySelector("#name").value,
        Email:document.querySelector("#email").value,
        Confirm_email:document.querySelector("#confirm_email").value,
        Password:document.querySelector("#password").value,
        Confirm_password:document.querySelector("#confirm_password").value,
    }
    signupArr.push(signupObj)
    localStorage.setItem("signupdata",JSON.stringify(signupArr));
}
})
