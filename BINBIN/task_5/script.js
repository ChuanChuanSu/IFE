/**
 * Created by Su Chuan on 2017/7/2.
 */

let input = document.getElementsByTagName("input")[0];
let ul = document.getElementsByTagName("ul")[0];

//为每个新加入的li添加事件处理程序，一旦被点击，则从队列中删除
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
        input.value = null;
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
        input.value = null;
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


//冒泡排序
/*function bubbleSort(){
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
}*/

//特殊效果（一顿一顿）的bubbleSort
function bubbleSort(){
    var count = 0,i = 0;
    bubbleId = setInterval(function(){
        if(count == ul.childNodes.length)
        {
            clearInterval(bubbleId);
        }
        else if(i == ul.childNodes.length - 1 - count)
        {
            i = 0;
            count ++;
        }
        else{
            if(parseInt(ul.childNodes[i].childNodes[0].innerHTML,10) > parseInt(ul.childNodes[i + 1].childNodes[0].innerHTML,10))
            {
                swap(i,i+1);
            }
            i ++;
        }
    },200);
}




//直接插入排序
function insertSort(){
    let sorted = 0;
    while(sorted < ul.childNodes.length - 1)
    {
        for(var i = 0;i <= sorted && parseInt(ul.childNodes[sorted + 1].childNodes[0].innerHTML,10) >= parseInt(ul.childNodes[i].childNodes[0].innerHTML,10);i++){}
        let temp = ul.childNodes[sorted + 1].childNodes[0].innerHTML;
        for(let j = sorted + 1;j > i;j--)
        {
            ul.childNodes[j].childNodes[0].innerHTML = ul.childNodes[j - 1].childNodes[0].innerHTML;
            ul.childNodes[j].style.height = String(parseInt(ul.childNodes[j].childNodes[0].innerHTML,10) * 2) + 'px';
        }
        ul.childNodes[i].childNodes[0].innerHTML = temp;
        ul.childNodes[i].style.height = String(parseInt(ul.childNodes[i].childNodes[0].innerHTML,10) * 2) + 'px';
        sorted++;
    }
}


//选择排序
function selectSort(){
    let length = ul.childNodes.length;
    for(let i = 0;i < length - 1;i++)
    {
        let min = i;
        for(let j = i + 1;j < length;j++)
        {
            if(parseInt(ul.childNodes[j].childNodes[0].innerHTML,10) < parseInt(ul.childNodes[min].childNodes[0].innerHTML,10))
            {
                min = j;
            }
        }
        if(min != i)
        {
            let temp = ul.childNodes[i].childNodes[0].innerHTML;
            ul.childNodes[i].childNodes[0].innerHTML = ul.childNodes[min].childNodes[0].innerHTML;
            ul.childNodes[min].childNodes[0].innerHTML = temp;
            ul.childNodes[i].style.height = String(parseInt(ul.childNodes[i].childNodes[0].innerHTML,10) * 2) + 'px';
            ul.childNodes[min].style.height = String(parseInt(ul.childNodes[min].childNodes[0].innerHTML,10) * 2) + 'px';
        }
    }
}

//返回无序表每个li元素中的值
function number(a){
    return parseInt(ul.childNodes[a].childNodes[0].innerHTML,10);
}
//交换函数
function swap(i,j){
    let temp = ul.childNodes[i].childNodes[0].innerHTML;
    ul.childNodes[i].childNodes[0].innerHTML = ul.childNodes[j].childNodes[0].innerHTML;
    ul.childNodes[j].childNodes[0].innerHTML = temp;
    ul.childNodes[i].style.height = String(parseInt(ul.childNodes[i].childNodes[0].innerHTML,10) * 2) + 'px';
    ul.childNodes[j].style.height = String(parseInt(ul.childNodes[j].childNodes[0].innerHTML,10) * 2) + 'px';
}


//快速排序
//分划函数
function partition(left,right){
    let pivot = number(left);
    let i = left + 1,j = right;
    do{
        for(;number(i) <= pivot && i < j;i++){}
        for(;number(j) >= pivot && i <= j;j--){}
        if(i < j){swap(i,j);}
    }while(i < j);
    swap(left,j);
    return j;
}
//排序函数
function quickSort(left,right)
{
    if(left < right)
    {
        var j =partition(left,right);
        quickSort(left,j - 1);
        quickSort(j + 1,right);
    }
}
function sort()
{
    quickSort(0,ul.childNodes.length - 1)
}


//初始化函数，为所有按钮绑定相应事件处理程序
function initialize(){
    document.getElementById("left-in").addEventListener("click",leftIn);
    document.getElementById("right-in").addEventListener("click",rightIn);
    document.getElementById("left-out").addEventListener("click",leftOut);
    document.getElementById("right-out").addEventListener("click",rightOut);
    document.getElementById("bubble_sort").addEventListener("click",bubbleSort);
    document.getElementById("insert_sort").addEventListener("click",insertSort);
    document.getElementById("select_sort").addEventListener("click",selectSort);
    document.getElementById("quick_sort").addEventListener("click",sort);
}

initialize();