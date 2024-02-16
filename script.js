 const changeform=()=>{
    form1.classList.toggle("hidden");
    form2.classList.toggle("hidden");

}
const changelabel=()=>{
    tlogin.classList.toggle("hidden");
    tsignup.classList.toggle("hidden");
}
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
loginRadio.addEventListener("click",(e)=>{
    changeform();
    changelabel();

});
signupRadio.addEventListener("click",(e)=>{
    changeform();
    changelabel();

});



signupbutton.addEventListener("click", (e) => {
    e.preventDefault();
    const inputValue = email1.value;
    if (validateEmail(inputValue)) {
        email1.classList.remove("error");
        email1.classList.add("valid");
    } else {
        email1.classList.remove("valid");
        email1.classList.add("error");
    }

    const passvalue = password.value;
    console.log(validatepassword(passvalue));
    if (validatepassword(passvalue)) {
        console.log(password);
        password.classList.add("valid");  // This line
        password.classList.remove("error");
        mess.classList.add("hidden");
    } else {
        password.classList.remove("valid");
        password.classList.add("error");
        mess.classList.remove("hidden");
    }
    
    const repassvalue=repassword.value;
    if(repassvalue===passvalue && repassvalue!="" && validatepassword(repassvalue)){
        repassword.classList.remove("error");
        repassword.classList.add("valid");
       

    }
    else{
        repassword.classList.add("error");
        repassword.classList.remove("valid");

    }
});
loginbutton.addEventListener("click", (e) => {
    e.preventDefault();
    const inputValue = email2.value;
    if (validateEmail(inputValue)) {
        email2.classList.remove("error");
        email2.classList.add("valid");
    } else {
        email2.classList.remove("valid");
        email2.classList.add("error");
    }

    const passvalue = passwordlog.value;
    console.log(validatepassword(passvalue));
    if (validatepassword(passvalue)) {
        console.log(passwordlog);
        passwordlog.classList.add("valid");  // This line
        passwordlog.classList.remove("error");
        mess1.classList.add("hidden");
    } else {
        passwordlog.classList.remove("valid");
        passwordlog.classList.add("error");
        mess1.classList.remove("hidden");
    }
    
    const repassvalue=repassword1.value;

    if(repassvalue===passvalue && repassvalue!="" && validatepassword(repassvalue)){
        repassword1.classList.remove("error");
        repassword1.classList.add("valid");


    }
    else{
        repassword1.classList.add("error");
        repassword1.classList.remove("valid");

    }
});


// Function to validate email
function validateEmail(email) {
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    return regex.test(email);
  }
  function validatepassword(pass){
    const ch = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return ch.test(pass);
}
