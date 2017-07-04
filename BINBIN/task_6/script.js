/**
 * Created by Su Chuan on 2017/7/4.
 */
let textarea = document.getElementsByTagName("textarea")[0];

let input = document.getElementsByTagName("input")[0];

let ul = document.getElementsByTagName("ul")[0];



function stringToArray(string){
    return string.split(/[\s\uff0c\u3001\u002c]+/);
}

function leftIn(){
    let content = textarea.value;
    let arr = stringToArray(content);
    for(let i = arr.length -1;i >= 0;i--)
    {
        let li = document.createElement("li");
        li.innerHTML = arr[i];
        ul.insertBefore(li,ul.firstChild);
    }
}

function rightIn(){
    let content = textarea.value;
    let arr = stringToArray(content);
    for(let i = 0;i < arr.length;i++)
    {
        let li = document.createElement("li");
        li.innerHTML = arr[i];
        ul.appendChild(li);
    }
}

function leftOut(){
    ul.removeChild(ul.firstChild);
}

function rightOut(){
    ul.removeChild(ul.lastChild);
}

//查询函数
function query(){
    let arr = input.value.split("");

    for(let i = 0;i < ul.childNodes.length;i ++)//第一层循环，遍历ul中所有子节点
    {
        let a = [];
        for(let b = 0;b < arr.length;b ++)//设置标志数组，显示input中字符串的匹配情况
        {
            a[b] = false;
        }
        let arrLi = ul.childNodes[i].innerHTML.split("");
        for(let j = 0;j < arr.length;j ++)//第二层循环，遍历input字符串数组
        {
            if(!a[j])
            {
                for(let k = 0;k < arrLi.length;k ++)//在arrLi中匹配input字符串
                {
                    if( arr[j] == arrLi[k])
                    {
                        a[j] = true;
                        break;//搜索到立即推出循环
                    }
                }
            }
            if(!a[j])
            {
                break;//input字符串任何当前字符未成功匹配，则表示当前ul子节点匹配不成功，继续匹配下一个li
            }
        }
        for(let b = 0;b < a.length;b ++)//检测是否所有input待匹配项都已匹配完毕
        {
            if(!a[b])
            {
                break;
            }
            if(b == a.length - 1)
            {
                ul.childNodes[i].style.backgroundColor = "yellow";
            }
        }
    }
}

function initialize(){
    document.getElementById("left-in").addEventListener("click",leftIn);
    document.getElementById("right-in").addEventListener("click",rightIn);
    document.getElementById("left-out").addEventListener("click",leftOut);
    document.getElementById("right-out").addEventListener("click",rightOut);
    document.getElementById("query").addEventListener("click",query);
}

initialize();