//Button click interaction
document.getElementById("exploreBtn").addEventListener("click",function(){
    document.getElementById("exploreText").innerText="Discover our premium smart devices below.";
});
//EXPLORE button scrolls to products section
document.getElementById("exploreBtn").addEventListener("click",function(){
    document.getElementById("products").scrollIntoView({
        behavior:"smooth"
    });
});


//FORM VALIDATION
const form=document.getElementById("contactForm");
const formMsg=document.getElementById("formMsg");

form.addEventListener("submit",function(e){
    e.preventDefault(); //stop page reload

    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const message=document.getElementById("message").value.trim();

    //Empty field check
    if(name === "" || email === "" || message === ""){
        formMsg.textContent = "Please fill all fields";
        formMsg.style.color = "red";
        return;
    }

    //Simple email check
    if(!email.includes("@") || !email.includes(".")){
        formMsg.textContent="Please enter a valid email";
        formMsg.style.color="red";
        return;
    }

    // Success
    formMsg.textContent="Message sent successfully!";
    formMsg.style.color="green";

    // Clear form
    form.reset();
});


// Change header color on scroll (dynamic behaviour)
window.addEventListener("scroll",function(){
    let header=document.querySelector(".header");

    if (window.scrollY>50){
        header.style.backgroundColor="#020617";
    }
    else{
        header.style.backgroundColor="#0F172A";
    }
});

//Select all Buy buttons
const buyButtons=document.querySelectorAll(".buy-btn");

//Add click event to each button
buyButtons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        btn.innerText="Added ✔";
        btn.disabled=true;
    });
});

//CART COUNTER 
let count=0;
let cartCount=document.getElementById("cartCount");
let buyButton=document.querySelectorAll(".buy-btn");
if(count>0){
    cartCount.style.color="orange";
}
cartCount.style.color="limegreen";

buyButtons.forEach(function (button){
    button.addEventListener("click", function(){
        count++;
        cartCount.textContent = count;
        alert("Item added to cart!");
    });
});