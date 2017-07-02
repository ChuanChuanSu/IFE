/**
 * Created by Su Chuan on 2017/7/2.
 */

let input = document.getElementsByTagName("input")[0];
let ul = document.getElementsByTagName("ul")[0];

function addDeleteLi(li){
        li.addEventListener("click",function(){
            ul.removeChild(event.currentTarget);
        });
}

function leftIn(){
    let li = document.createElement("li");
    li.innerHTML = input.value;
    ul.insertBefore(li,ul.firstChild);
    addDeleteLi(li);
}

function rightIn(){
    let li = document.createElement("li");
    li.innerHTML = input.value;
    ul.appendChild(li);
    addDeleteLi(li);
}

function leftOut(){
    let li = ul.removeChild(ul.firstChild);
    input.value  = li.innerHTML;
    alert(li.innerHTML);
}

function rightOut(){
    let li = ul.removeChild(ul.lastChild);
    input.value  = li.innerHTML;
    alert(li.innerHTML);
}

function initialize(){
    document.getElementById("left-in").addEventListener("click",leftIn);
    document.getElementById("right-in").addEventListener("click",rightIn);
    document.getElementById("left-out").addEventListener("click",leftOut);
    document.getElementById("right-out").addEventListener("click",rightOut);
}

initialize();