/**
 * Created by Su Chuan on 2017/7/11.
 */
const name = ["小华","小明","小川","小鹏","小芳"];
let table = document.getElementsByTagName("table")[0];
let buttons = document.getElementsByTagName("button");
let trs;
let tbody;

window.onload = function(){
    for(let i = 0;i < name.length;i ++)
    {
        let total = 0;
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let last = document.createElement("td");
        td.innerHTML = name[i];
        tr.appendChild(td);
        for(let j = 0;j < 3;j ++)
        {
            let a = document.createElement("td");
            a.innerHTML = (Math.floor(Math.random() * 41) + 60);
            total += parseInt(a.innerHTML,10);
            tr.appendChild(a);
        }
        last.innerHTML = total;
        tr.appendChild(last);
        table.children[0].appendChild(tr);
    }
    trs = document.getElementsByTagName("tr");
    tbody = table.children[0];
};



function indexOf(className)
{
    if((/.Chinese/).test(arguments[0]))
    {
        return 1;
    }
    else if((/.Math/).test(arguments[0]))
    {
        return 2;
    }
    else if((/.English/).test(arguments[0]))
    {
        return 3;
    }
    else if((/.total/).test(arguments[0]))
    {
        return 4;
    }
}

for(let i = 0;i < buttons.length;i ++)
{
    if(!(i % 2))
    {
        buttons[i].addEventListener("click",()=>{
            let index = indexOf(event.target.className);
            for(let j = 1;j < 5;j ++)
            {
                let max = j;
                for(let k = j + 1;k < 6;k ++)
                {
                    if(parseInt(trs[k].children[index].innerHTML,10) > parseInt(trs[max].children[index].innerHTML,10))
                    {
                        max = k;
                    }
                }
                if(max != j)
                {
                    tbody.insertBefore(tbody.children[max],tbody.children[j]);//insertBefore()会自动删除第一个参数节点
                    //tbody.removeChild(tbody.children[j + 1]);
                    tbody.insertBefore(tbody.children[j + 1],tbody.children[max + 1]);
                }
            }
        });
    }
    else
    {
        buttons[i].addEventListener("click",()=>{
            let index = indexOf(event.target.className);
            for(let j = 1;j < 5;j ++)
            {
                let min = j;
                for(let k = j + 1;k < 6;k ++)
                {
                    if(parseInt(trs[k].children[index].innerHTML,10) < parseInt(trs[min].children[index].innerHTML,10))
                    {
                        min = k;
                    }
                }
                if(min != j)
                {
                    tbody.insertBefore(tbody.children[min],tbody.children[j]);//insertBefore()会自动删除第一个参数节点
                    //tbody.removeChild(tbody.children[j + 1]);
                    tbody.insertBefore(tbody.children[j + 1],tbody.children[min + 1]);
                }
            }
        });
    }
}