let a = document.getElementById("animal");

a.addEventListener("mouseover", function(){
    a.innerHTML = "SIMBA";
});

a.addEventListener("mouseout", function(){
    a.innerHTML = "LION";
});

setTimeout(function(){
    alert("Welcome to the Animal Page!");
}, 3000);