/**
 * Created by Su Chuan on 2017/7/10.
 */
let transparent = document.getElementsByClassName("transparent")[0];
let float = document.getElementsByClassName("float")[0];
let button = document.getElementsByTagName("button");

function disappear(){
    transparent.style.display = "none";
    float.style.display = "none";
}

function appear(){
    transparent.style.display = "block";
    float.style.display = "block";
}

button[0].addEventListener("click",appear);

transparent.addEventListener("click",disappear);

button[1].addEventListener("click",disappear);

button[2].addEventListener("click",disappear);