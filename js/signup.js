const form = document.querySelector(".signup form"),
continueBtn = form.querySelector(".button input"),
errorTxt = form.querySelector(".error-txt");


    form.onsubmit = (e) => {
        e.preventDefault();
    }
    continueBtn.onclick = () => {
        let xhr = new XMLHttpRequest(); // c reating XML OBJECT
            xhr.open("POST", "assets/php/signup.php", true);
            xhr.onload = () => {
                if (xhr.readyState === XMLHttpRequest.DONE){
                    if(xhr.status === 200){
                        let data = xhr.response;
                        if (data == "Success"){
                            location.href = "users.php";
                        } else{
                             errorTxt.textContent = data;
                             errorTxt.style.display = "block";
                             
                        }
                    }
                }
            }
            //we have to send the form data through ajax to php
        let formData = new FormData(form); //creating new formData object
        xhr.send(formData); //sendind the form data to php
    }
        