/**
 * Created by Su Chuan on 2017/7/4.
 */
function preOrder(){
    document.getElementById("root").first();
}

function first(){
    this.parentNode.style.backgroundColor = "white";
    this.style.backgroundColor = "yellow";
    if(this.firstChild){
        setTimeout(this.firstChild.first,500);
    }
    if(this.lastChild){
        setTimeout(this.lastChild.first,1000);
    }
}

var a = document.getElementsByTagName("div");
for(let i = 0;i < a.length;i ++)
{
    a[i].first = first;
}

document.getElementById("first").addEventListener("click",preOrder);