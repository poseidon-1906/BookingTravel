const pswrd = document.querySelector(".form input[type='password']");
const toggleBtn = document.querySelector(".form .fields img");
toggleBtn.onclick = () => {
    if(pswrd.type == "password"){
        pswrd.type = "text";
        toggleBtn.classList.add("active");
    }
    else{
        pswrd.type = "password";
        toggleBtn.classList.remove("active");
    }
}