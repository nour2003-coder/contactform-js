const loginRadio = document.getElementById("login");
const signupRadio = document.getElementById("signup");
const tlogin = document.getElementById("tlogin");
const loginbutton = document.getElementById("loginbutton");
const tsignup = document.getElementById("tsignup");
const signupbutton = document.getElementById("signupbutton");
const form = document.getElementById("form1");
const form2 = document.getElementById("form2");
const email2 = document.getElementById("email2");
const email1 = document.getElementById("email"); 
const password = document.getElementById("password"); 
const passwordlog = document.getElementById("passwordlog"); 
const repassword=document.getElementById("repassword");
const repassword1=document.getElementById("repasswordl");
const mess=document.getElementsByClassName("incorrect")[0];
const mess1=document.getElementsByClassName("incorrect1")[0];
const name=document.getElementById("name");
const checkbox=document.getElementById("check");
const changeform=()=>{
    form1.classList.toggle("hidden");
    form2.classList.toggle("hidden");

}
const changelabel=()=>{
    tlogin.classList.toggle("hidden");
    tsignup.classList.toggle("hidden");
}
loginRadio.addEventListener("click",(e)=>{
    changeform();
    changelabel();

});
signupRadio.addEventListener("click",(e)=>{
    changeform();
    changelabel();

});
email1.addEventListener("input", () => {
    const inputValue = email1.value;
    if (validateEmail(inputValue)) {
        email1.classList.remove("error");
        email1.classList.add("valid");
    } else {
        email1.classList.remove("valid");
        email1.classList.add("error");
    }
});
name.addEventListener("input", () => {   
    const inputValue = name.value;
    if (inputValue.trim() != ''){
        name.classList.remove("error");
        name.classList.add("valid");
    
    }
});
password.addEventListener("input", () => {
    const passvalue = password.value;
    if (validatepassword(passvalue)) {
        password.classList.add("valid");
        password.classList.remove("error");
        mess.classList.add("hidden");
    } else {
        password.classList.remove("valid");
        password.classList.add("error");
        mess.classList.remove("hidden");
    }
});

repassword.addEventListener("input", () => {
    const passvalue = password.value;
    const repassvalue = repassword.value;
    if (repassvalue === passvalue && repassvalue !== "" && validatepassword(repassvalue)) {
        repassword.classList.remove("error");
        repassword.classList.add("valid");
    } else {
        repassword.classList.add("error");
        repassword.classList.remove("valid");
    }
});

email2.addEventListener("input", () => {
    const inputValue = email2.value;
    if (validateEmail(inputValue)) {
        email2.classList.remove("error");
        email2.classList.add("valid");
    } else {
        email2.classList.remove("valid");
        email2.classList.add("error");
    }
});

passwordlog.addEventListener("input", () => {
    const passvalue = passwordlog.value;
    if (validatepassword(passvalue)) {
        passwordlog.classList.add("valid");
        passwordlog.classList.remove("error");
        mess1.classList.add("hidden");
    } else {
        passwordlog.classList.remove("valid");
        passwordlog.classList.add("error");
        mess1.classList.remove("hidden");
    }
});
signupbutton.addEventListener("click", (e) => {
    e.preventDefault();
    const name=document.getElementById("name");
    if (name.value.trim() === '') {
        name.classList.remove("valid");
        name.classList.add("error");
        exit;
    }
    const checkbox=document.getElementById("check");
    const checkError = document.getElementById('checkError');
    if (!checkbox.checked) {
        checkError.classList.add("errorch"); 
        checkError.classList.remove("noerror"); 
        exit;

    }
    const inputValue = email1.value;
    if (!validateEmail(inputValue)) {
        email1.classList.remove("valid");
        email1.classList.add("error");
        exit; 
    }
    const passvalue = password.value;
    if (!validatepassword(passvalue)) {
        password.classList.remove("valid");
        password.classList.add("error");
        mess.classList.remove("hidden");
        exit;
    }


    const repassvalue = repassword.value;
    if (repassvalue !== passvalue || !validatepassword(repassvalue)) {
        repassword.classList.add("error");
        repassword.classList.remove("valid");
        exit;
    }

    form.submit(); 
});
loginbutton.addEventListener("click", (e) => {
    e.preventDefault();
    const inputValue = email2.value;
    if (!validateEmail(inputValue)) {
        email2.classList.remove("valid");
        email2.classList.add("error");
        exit; 
    }

    const passvalue = passwordlog.value;
    if (!validatepassword(passvalue)) {
        passwordlog.classList.remove("valid");
        passwordlog.classList.add("error");
        mess1.classList.remove("hidden");
        exit;
    }

    form2.submit(); 
});

repassword1.addEventListener("input", () => {
    const passvalue = passwordlog.value;
    const repassvalue = repassword1.value;
    if (repassvalue === passvalue && repassvalue !== "" && validatepassword(repassvalue)) {
        repassword1.classList.remove("error");
        repassword1.classList.add("valid");
    } else {
        repassword1.classList.add("error");
        repassword1.classList.remove("valid");
    }
});

checkbox.addEventListener("click",(e)=>{
    const checkError = document.getElementById('checkError');
    checkError.classList.add("noerror"); 
    checkError.classList.remove("errorch"); 
})
// Function to validate email
function validateEmail(email) {
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    return regex.test(email);
  }
  function validatepassword(pass){
    const ch = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return ch.test(pass);
}
