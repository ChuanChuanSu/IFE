/**
 * Created by Su Chuan on 2017/7/2.
 */

let input = document.getElementsByTagName("input")[0];
let ul = document.getElementsByTagName("ul")[0];

//为每个新加入的li添加事件
function addDeleteLi(li){
        li.addEventListener("click",function(){
            ul.removeChild(event.currentTarget);
        });
}

function leftIn(){
    if(input.value < 10 || input.value > 100)
    {
        alert("False input!");
    }
    else
    {
        let li = document.createElement("li");
        let span = document.createElement('span');
        span.innerHTML = input.value;
        li.appendChild(span);
        li.style.height = String(parseInt(input.value,10) * 2) + 'px';
        ul.insertBefore(li,ul.firstChild);
        addDeleteLi(li);
    }
}

function rightIn(){
    if(input.value < 10 || input.value > 100)
    {
        alert("False input!");
    }
    else
    {
        let li = document.createElement("li");
        let span = document.createElement('span');
        span.innerHTML = input.value;
        li.appendChild(span);
        li.style.height = String(parseInt(input.value,10) * 2) + 'px';
        ul.appendChild(li);
        addDeleteLi(li);
    }

}

function leftOut(){
    let li = ul.removeChild(ul.firstChild);
    input.value  = li.firstChild.innerHTML;
    //alert(li.firstChild.innerHTML);
}

function rightOut(){
    let li = ul.removeChild(ul.lastChild);
    input.value  = li.firstChild.innerHTML;
    //alert(li.firstChild.innerHTML);
}

function bubbleSort(){
    for(let i = 0,length = ul.childNodes.length;i < length - 1;i++)
    {
        for(let j = 0;j < length - i - 1;j++)
        {
            if(parseInt(ul.childNodes[j].childNodes[0].innerHTML,10) > parseInt(ul.childNodes[j + 1].childNodes[0].innerHTML,10))
            {
                let temp = ul.childNodes[j].childNodes[0].innerHTML;
                ul.childNodes[j].childNodes[0].innerHTML = ul.childNodes[j + 1].childNodes[0].innerHTML;
                ul.childNodes[j + 1].childNodes[0].innerHTML = temp;
                ul.childNodes[j].style.height = String(parseInt(ul.childNodes[j].childNodes[0].innerHTML,10) * 2) + 'px';
                ul.childNodes[j + 1].style.height = String(parseInt(ul.childNodes[j + 1].childNodes[0].innerHTML,10) * 2) + 'px';
            }
        }
    }
}




function initialize(){
    document.getElementById("left-in").addEventListener("click",leftIn);
    document.getElementById("right-in").addEventListener("click",rightIn);
    document.getElementById("left-out").addEventListener("click",leftOut);
    document.getElementById("right-out").addEventListener("click",rightOut);
    document.getElementById("bubble_sort").addEventListener("click",bubbleSort);
}

initialize();