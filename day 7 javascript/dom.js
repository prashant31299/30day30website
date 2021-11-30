document.getElementsByTagName("h1")[0].innerHTML="good morning"
document.getElementsByTagName("p")[0].innerHTML="hows daty"
document.getElementsByTagName("p")[1].innerHTML="what do you do "
document.getElementById("h1").innerHTML="L.A"
document.getElementById("h3").innerHTML="standford"
document.getElementsByClassName("intro1")[0].innerHTML="im devloper what wronge with  you"

// learning querty selector 
document.querySelector("h2").innerHTML="changing the query "
document.querySelectorAll('p.intro')[0].innerHTML="first p changes"
document.querySelectorAll("p.intro")[1].innerHTML="second p changes"
document.querySelectorAll("p.intro")[2].innerHTML="third p changes"



document.querySelector("h1").style.color="red";


function changetext(id){
    id.innerHTML="oops!"
}